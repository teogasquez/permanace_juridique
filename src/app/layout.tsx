import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Permanence Juridique - Consultations Juridiques Gratuites',
  description: '20 ans de consultations juridiques gratuites tous les samedis. Expertise en droit du travail, famille, immobilier et consommation.',
  icons: {
    icon: '/favicon.png', 
  },
  keywords: 'permanence juridique, consultation gratuite, avocat, droit, Lausanne, droit civil, droit pénal, droit administratif',
  authors: [{ name: 'Permanence Juridique' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Permanence Juridique - Consultations Gratuites',
    description: 'Consultations juridiques gratuites tous les samedis',
    url: 'https://lawcost.ch',
    siteName: 'Permanence Juridique',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Schema.org structured data pour améliorer le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Permanence Juridique",
              "description": "Consultations juridiques gratuites tous les samedis",
              "url": "https://lawcost.ch",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lausanne",
                "addressCountry": "CH"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "13:00",
                "closes": "19:00"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0A0B1C]`}>
        <header className="bg-[#1A1B3B]/90 backdrop-blur-sm text-[#E2E2E8] p-4 sticky top-0 z-50 shadow-[0_0_15px_rgba(237,73,174,0.2)]">
          <nav className="container mx-auto flex flex-wrap justify-between items-center">
            <Link href="/">
              <div className="flex items-center group">
                <div className="relative mr-3">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ED49AE] to-[#270B84] rounded-md blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>
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
                <div className="relative px-4 py-2 rounded-md bg-gradient-to-r from-[#ED49AE] to-[#270B84] text-white font-medium hover:from-[#f16bbd] hover:to-[#3a11b7] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#ED49AE]/20">
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
      </body>
    </html>
  )
}