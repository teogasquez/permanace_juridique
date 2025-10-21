'use client'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-[#1A1B3B]/90 backdrop-blur-sm text-[#E2E2E8] p-4 sticky top-0 z-50 shadow-[0_0_15px_rgba(237,73,174,0.2)]">
        <nav className="container mx-auto flex flex-wrap justify-between items-center">
          <Link href="/">
            <div className="flex items-center group">
              <div className="relative mr-3">
                <div className="absolute -inset-1 rounded-md blur-sm opacity-75 group-hover:opacity-100 transition duration-300" style={{ background: 'linear-gradient(to right, #ED49AE, #270B84)' }}></div>
                <div className="relative bg-[#1A1B3B] rounded-md p-1.5">
                  <Image
                    src="/logo_juridic.svg"
                    alt="Permanence Juridique Logo"
                    width={45}
                    height={45}
                    className="transform group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/">
              <div className="relative group">
                <span className="hover:text-[#ED49AE] transition-colors duration-300">Accueil</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED49AE] group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
            <Link href="/reservation">
              <div className="relative group">
                <span className="hover:text-[#ED49AE] transition-colors duration-300">Réserver</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED49AE] group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
            <Link href="/admin">
              <div className="relative px-4 py-2 rounded-md text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg" style={{ background: 'linear-gradient(to right, #ED49AE, #270B84)' }}>
                <span>Admin</span>
              </div>
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer />
    </>
  )
}
