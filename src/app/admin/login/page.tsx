'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
      
      const data = await res.json()

      if (res.ok) {
        window.location.href = '/admin'
      } else {
        setError(data.error || 'Erreur de connexion')
      }
    } catch (err) {
      console.error('Erreur:', err)
      setError('Erreur de connexion')
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0B1C] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-[#1A1B3B] p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-[#BB2E8F] text-center">Admin Login</h1>
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-2 mb-4 rounded text-center">
            {error}
          </div>
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 p-2 bg-[#2A2B4B] text-white rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full mb-6 p-2 bg-[#2A2B4B] text-white rounded"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-[#BB2E8F] text-white p-2 rounded hover:bg-opacity-90 transition-colors"
        >
          Connexion
        </button>
      </form>
    </div>
  )
}