'use client'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import Modal from '@/components/Modal'

type Booking = {
  id: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  subject: string
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/admin/bookings')
        const data = await response.json()
        setBookings(data.bookings)
      } catch (err) {
        setError('Erreur lors du chargement des rendez-vous')
      } finally {
        setIsLoading(false)
      }
    }
    fetchBookings()
  }, [])

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/logout', { method: 'POST' })
      if (res.ok) window.location.href = '/admin/login'
    } catch (error) {
      console.error('Erreur de déconnexion:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Voulez-vous vraiment supprimer ce rendez-vous ?')) return
    
    setDeletingId(id)
    try {
      const response = await fetch(`/api/admin/bookings/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setBookings(prev => prev.filter(booking => booking.id !== id))
        setDeleteSuccess('Rendez-vous supprimé avec succès')
        setTimeout(() => setDeleteSuccess(null), 3000)
      }
    } catch (err) {
      setError('Erreur lors de la suppression')
    } finally {
      setDeletingId(null)
    }
  }

  if (isLoading) return (
    <div className="min-h-screen bg-[#0A0B1C] p-8 flex items-center justify-center">
      <div className="text-[#E2E2E8] text-xl">Chargement...</div>
    </div>
  )

  if (error) return (
    <div className="min-h-screen bg-[#0A0B1C] p-8 flex items-center justify-center">
      <div className="text-[#BB2E8F] text-xl">{error}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0A0B1C] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#BB2E8F]">
            Administration des rendez-vous
          </h1>
          <button
            onClick={handleLogout}
            className="bg-[#BB2E8F] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
          >
            Déconnexion
          </button>
        </div>

        {deleteSuccess && (
          <div className="mb-4 p-4 bg-green-500/10 text-green-500 rounded-lg">
            {deleteSuccess}
          </div>
        )}

        <div className="bg-[#1A1B3B] p-6 rounded-lg shadow-[0_0_15px_rgba(187,46,143,0.1)]">
          {bookings.length === 0 ? (
            <p className="text-[#E2E2E8] text-center text-lg">
              Aucun rendez-vous trouvé
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-[#E2E2E8]">
                <thead>
                  <tr className="border-b border-[#404163]">
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Heure</th>
                    <th className="p-3 text-left">Nom</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">téléphone</th>
                    <th className="p-3 text-left">Sujet</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr 
                      key={booking.id} 
                      className="border-b border-[#404163] hover:bg-[#2A2B4B] transition-colors"
                    >
                      <td className="p-3">{format(new Date(booking.date), 'dd MMMM yyyy', { locale: fr })}</td>
                      <td className="p-3">{booking.time}</td>
                      <td className="p-3">{booking.name}</td>
                      <td className="p-3">{booking.email}</td>
                      <td className="p-3">{booking.phone}</td>
                      <td className="p-3">
                        <button
                          onClick={() => setSelectedSubject(booking.subject)}
                          className="text-left hover:text-[#BB2E8F] transition-colors w-full"
                        >
                          Voir le sujet
                        </button>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(booking.id)}
                          disabled={deletingId === booking.id}
                          className={`text-red-500 hover:text-red-400 transition-colors ${
                            deletingId === booking.id ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          {deletingId === booking.id ? 'Suppression...' : 'Supprimer'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Modal
        subject={selectedSubject || ''}
        isOpen={!!selectedSubject}
        onClose={() => setSelectedSubject(null)}
      />
    </div>
  )
}