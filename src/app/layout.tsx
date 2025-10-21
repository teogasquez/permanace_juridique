import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lawcost.ch'),
  title: {
    default: 'Permanence Juridique Lausanne - Consultations Juridiques Gratuites',
    template: '%s | Permanence Juridique'
  },
  description: '20 ans de consultations juridiques gratuites tous les samedis à Lausanne. Expertise en droit du travail, famille, immobilier et consommation. Rendez-vous de 15 minutes avec des avocats professionnels.',
  keywords: [
    'permanence juridique',
    'consultation gratuite',
    'avocat gratuit',
    'conseil juridique Lausanne',
    'droit civil',
    'droit pénal',
    'droit administratif',
    'droit du travail',
    'droit de la famille',
    'aide juridique Suisse',
    'avocat Lausanne',
    'consultation juridique samedi',
    'rendez-vous avocat gratuit'
  ],
  authors: [{ name: 'Permanence Juridique Lausanne' }],
  creator: 'Permanence Juridique',
  publisher: 'Permanence Juridique Lausanne',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lawcost.ch',
  },
  category: 'Legal Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://lawcost.ch",
    "name": "Permanence Juridique Lausanne",
    "description": "Consultations juridiques gratuites tous les samedis depuis 20 ans",
    "url": "https://lawcost.ch",
    "logo": "https://lawcost.ch/logo_juridic.svg",
    "priceRange": "Gratuit",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. de Provence 4",
      "addressLocality": "Lausanne",
      "postalCode": "1007",
      "addressCountry": "CH",
      "addressRegion": "Vaud"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.5197",
      "longitude": "6.6323"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "13:00",
      "closes": "19:00"
    },
    "areaServed": {
      "@type": "City",
      "name": "Lausanne"
    },
    "availableLanguage": ["French"],
    "serviceType": [
      "Droit civil",
      "Droit pénal",
      "Droit administratif",
      "Droit du travail",
      "Droit de la famille"
    ]
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://lawcost.ch"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Réserver",
        "item": "https://lawcost.ch/reservation"
      }
    ]
  }

  return (
    <html lang="fr-CH" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://lawcost.ch" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ED49AE" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Structured Data - Legal Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
        
        {/* Structured Data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd)
          }}
        />
        
        {/* Preconnect pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-[#0A0B1C] transition-colors duration-300`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}