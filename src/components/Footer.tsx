'use client'
import Link from 'next/link'
import Script from 'next/script'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <>
      <footer className="bg-[#1A1B3B] text-[#E2E2E8] border-t border-[#404163]/20" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Pied de page</h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Grille principale - responsive pour mobile, tablette et desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {/* Colonne Contact */}
            <div>
              <h3 className="text-[#ED49AE] font-semibold mb-4 text-lg">Contact</h3>
              <address className="not-italic space-y-3">
                <div>
                  <a 
                    href="https://maps.google.com/?q=Avenue+de+Provence+4+1007+Lausanne+Suisse" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:text-[#ED49AE] transition-colors block"
                    title="Voir sur Google Maps"
                  >
                    <p>Av. de Provence 4</p>
                    <p>1007 Lausanne, Suisse</p>
                  </a>
                </div>
                
                <div>
                  <a href="mailto:pjs@hotmail.ch" className="hover:text-[#ED49AE] transition-colors underline" title="Nous contacter par email">
                    pjs@hotmail.ch
                  </a>
                </div>
              </address>
            </div>

            {/* Colonne Liens Utiles */}
            <div>
              <h3 className="text-[#ED49AE] font-semibold mb-4 text-lg">Liens Utiles</h3>
              <nav aria-label="Liens utiles">
                <ul className="space-y-2">
                  <li>
                    <Link href="/reservation" className="hover:text-[#ED49AE] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ED49AE] focus:ring-offset-[#1A1B3B] rounded">
                      Prendre rendez-vous
                    </Link>
                  </li>
                  <li>
                    <Link href="/mentions-legales" className="hover:text-[#ED49AE] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ED49AE] focus:ring-offset-[#1A1B3B] rounded">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/politique-confidentialite" className="hover:text-[#ED49AE] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ED49AE] focus:ring-offset-[#1A1B3B] rounded">
                      Politique de confidentialité
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Colonne Horaires */}
            <div>
              <h3 className="text-[#ED49AE] font-semibold mb-4 text-lg">Horaires</h3>
              <div>
                <p>Permanence juridique du samedi</p>
                <p className="font-semibold">Tous les samedis</p>
                <p>de 13h00 à 19h00</p>
                <p className="mt-2 text-sm">Sur rendez-vous uniquement</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-[#404163]/20">
            <p>© {currentYear} Permanence Juridique du samedi. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Schema.org pour SEO amélioré */}
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Permanence Juridique du samedi",
            "url": "https://www.permanencejuridique.ch",
            "description": "Service de consultations juridiques disponibles tous les samedis à Lausanne. Nos juristes qualifiés vous conseillent sur vos questions juridiques.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. de Provence 4",
              "addressLocality": "Lausanne",
              "postalCode": "1007",
              "addressCountry": "CH"
            },
            "email": "pjs@hotmail.ch",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "https://schema.org/Saturday",
              "opens": "13:00",
              "closes": "19:00"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lausanne"
            }
          }
        `}
      </Script>
    </>
  )
}