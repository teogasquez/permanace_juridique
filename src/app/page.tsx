'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  // Fonction pour faire défiler vers la section suivante
  const scrollToNext = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // Références pour chaque section
  const whyRef = useRef<HTMLElement | null>(null)
  const domainesRef = useRef<HTMLElement | null>(null)
  const processRef = useRef<HTMLElement | null>(null)
  const faqRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)

  return (
    <main className="bg-[#0A0B1C]">
      {/* Section Hero */}
      <section className="min-h-screen bg-[#1A1B3B] text-[#E2E2E8] flex flex-col justify-center relative shadow-[0_0_15px_rgba(237,73,174,0.1)] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center grow flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-[#ED49AE] px-2">
              Permanence Juridique
            </h1>
            
            <div className="bg-[#2A2B4B] p-4 md:p-6 rounded-lg inline-block border border-[#404163] shadow-[0_0_20px_rgba(64,65,99,0.3)] w-full max-w-xl mx-auto mb-4 md:mb-10">
              <h2 className="text-lg md:text-2xl font-semibold mb-2">20 ans d'expertise juridique</h2>
              <p className="text-sm md:text-lg">Consultations gratuites de 15 minutes tous les samedis</p>
            </div>
            
            <div className="bg-[#2A2B4B] p-4 md:p-6 rounded-lg border border-[#404163] max-w-3xl mx-auto mb-6 md:mb-10">
              <p className="text-sm md:text-lg mb-3 md:mb-4">
                Chaque consultation est <span className="text-[#ED49AE] font-bold">strictement confidentielle</span> et menée par notre avocat expérimenté.
              </p>
              <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">
                Nous sommes situés à Av. de Provence 4, 1007 Lausanne, Suisse
              </p>
              <p className="text-xs md:text-sm text-gray-300">
                <span className="font-bold text-[#ED49AE]">Réservation obligatoire</span> - Places limitées chaque samedi
              </p>
            </div>
            
            <div>
              <Link 
                href="/reservation" 
                className="inline-block px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-[#ED49AE] to-[#270B84] text-white rounded-lg hover:from-[#f16bbd] hover:to-[#3a11b7] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#ED49AE]/20 text-sm md:text-base font-medium"
              >
                Réserver votre consultation
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Flèche de scroll */}
        <div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden sm:block" 
          onClick={() => scrollToNext(whyRef)}
        >
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ED49AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Section Pourquoi venir */}
      <section ref={whyRef} className="min-h-screen flex flex-col justify-center relative border-t border-[#404163]/20 py-12 md:py-16">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white px-2"
          >
            Pourquoi consulter notre <span className="text-[#ED49AE]">permanence juridique</span> ?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Expertise diversifiée",
                description: "Nos juristes couvrent un large éventail de domaines: droit de la famille, du travail, immobilier, et plus encore.",
              },
              {
                title: "Service gratuit",
                description: "Consultations gratuites de 15 minutes pour vous orienter et vous conseiller sur vos problèmes juridiques.",
              },
              {
                title: "Confidentialité",
                description: "Nous garantissons une confidentialité totale de vos informations et de votre situation personnelle.",
              },
              {
                title: "Réservation simple",
                description: "Réservez facilement votre créneau en ligne pour garantir votre consultation au jour et à l'heure qui vous conviennent.",
              },
              {
                title: "Conseils pratiques",
                description: "Obtenez des conseils concrets et des solutions applicables à votre situation spécifique.",
              },
              {
                title: "Orientation juridique",
                description: "Si nécessaire, nous vous orientons vers les ressources ou spécialistes adaptés à votre cas.",
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1B3B] p-5 md:p-6 rounded-lg shadow-lg hover:shadow-[#ED49AE]/10 transition-all duration-300 border border-[#404163]/30"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-linear-to-br from-[#ED49AE] to-[#270B84] flex items-center justify-center mb-3 md:mb-4">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#1A1B3B] flex items-center justify-center">
                    <div className="text-lg md:text-2xl text-[#ED49AE] font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{item.title}</h3>
                <p className="text-sm md:text-base text-[#E2E2E8] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden sm:block" 
          onClick={() => scrollToNext(domainesRef)}
        >
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ED49AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      
      {/* Section Nos domaines de compétence */}
      <section ref={domainesRef} className="min-h-screen flex flex-col justify-center relative bg-[#131426] border-t border-[#404163]/20 py-12 md:py-16">
        <div className="container mx-auto px-4 py-4 md:py-8 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white px-2"
          >
            Nos domaines de <span className="text-[#ED49AE]">compétence</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {/* Droit civil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1A1B3B] p-5 md:p-6 rounded-xl shadow-lg border border-[#404163]/30 hover:border-[#ED49AE]/30 transition-all duration-300"
            >
              <div className="bg-linear-to-br from-[#ED49AE] to-[#270B84] w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#ED49AE] text-center">Droit civil</h3>
              <ul className="space-y-2 text-[#E2E2E8] text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Procédure civile (CPC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Séparation/Divorce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Succession/Testament</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droit des curatelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droit des contrats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droit du bail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droit du travail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droit des sociétés</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Droit pénal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1A1B3B] p-5 md:p-6 rounded-xl shadow-lg border border-[#404163]/30 hover:border-[#ED49AE]/30 transition-all duration-300"
            >
              <div className="bg-linear-to-br from-[#ED49AE] to-[#270B84] w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#ED49AE] text-center">Droit pénal</h3>
              <ul className="space-y-2 text-[#E2E2E8] text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Procédure pénale (CPP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Dépôt d'une plainte pénale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Aide aux victimes d'infractions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Crimes et Délits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Blanchiment d'argent (LBA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droits procéduraux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Exécution des peines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Casier judiciaire</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Droit administratif */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1A1B3B] p-5 md:p-6 rounded-xl shadow-lg border border-[#404163]/30 hover:border-[#ED49AE]/30 transition-all duration-300"
            >
              <div className="bg-linear-to-br from-[#ED49AE] to-[#270B84] w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#ED49AE] text-center">Droit administratif</h3>
              <ul className="space-y-2 text-[#E2E2E8] text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Procédure administrative</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Fiscalité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droit des étrangers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Droit de la construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Circulation routière</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Marchés publics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Assurances sociales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED49AE] mr-2 shrink-0">•</span>
                  <span>Voies et délais de recours</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden sm:block" 
          onClick={() => scrollToNext(processRef)}
        >
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ED49AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section ref={processRef} className="min-h-screen flex flex-col justify-center relative bg-[#0A0B1C] border-t border-[#404163]/20 py-12 md:py-16">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white px-2"
          >
            Comment <span className="text-[#ED49AE]">ça marche</span> ?
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            {[
              {
                step: "01",
                title: "Réservez votre créneau",
                description: "Choisissez un horaire qui vous convient via notre système de réservation en ligne."
              },
              {
                step: "02",
                title: "Confirmation par email",
                description: "Recevez une confirmation de votre rendez-vous avec toutes les informations nécessaires."
              },
              {
                step: "03",
                title: "Préparez vos documents",
                description: "Rassemblez tous les documents pertinents liés à votre situation juridique."
              },
              {
                step: "04",
                title: "Présentez-vous à la permanence",
                description: "Arrivez 5 minutes avant votre rendez-vous avec vos documents."
              },
              {
                step: "05",
                title: "Consultation avec un juriste",
                description: "Exposez votre situation et recevez des conseils personnalisés pendant 15 minutes."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex mb-6 md:mb-8 items-start"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-linear-to-br from-[#ED49AE] to-[#270B84] text-white font-bold text-lg md:text-xl mr-3 md:mr-4 shrink-0">
                  {item.step}
                </div>
                <div className="bg-[#1A1B3B] p-4 md:p-6 rounded-lg grow">
                  <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-white">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#E2E2E8] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden sm:block" 
          onClick={() => scrollToNext(faqRef)}
        >
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ED49AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Section FAQ */}
      <section ref={faqRef} className="min-h-screen flex flex-col justify-center relative border-t border-[#404163]/20 py-12 md:py-16">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white px-2"
          >
            Questions <span className="text-[#ED49AE]">fréquentes</span>
          </motion.h2>

          <div className="space-y-4 md:space-y-5 max-w-3xl mx-auto">
            {[
              {
                question: "Combien coûte la consultation?",
                answer: "Nos consultations sont entièrement gratuites. Nous offrons 15 minutes de conseil juridique sans frais tous les samedis."
              },
              {
                question: "La réservation est-elle vraiment obligatoire?",
                answer: "Oui, pour garantir un service de qualité et éviter les longues attentes, la réservation préalable est obligatoire. Cela nous permet d'organiser les consultations de manière efficace."
              },
              {
                question: "Quels types de cas traitez-vous?",
                answer: "Nous traitons un large éventail de questions juridiques, notamment en droit de la famille, droit du travail, droit immobilier, droit de la consommation et droit des contrats."
              },
              {
                question: "Comment se déroule une consultation?",
                answer: "Après avoir réservé, vous vous présentez à l'heure prévue. Vous exposez brièvement votre problème juridique, puis le juriste vous pose des questions pour clarifier la situation et vous fournit des conseils adaptés dans la limite des 15 minutes."
              },
              {
                question: "Quels documents apporter?",
                answer: "Il est recommandé d'apporter tout document pertinent lié à votre situation juridique: contrats, courriers officiels, mises en demeure, actes judiciaires, etc. Cela permet au juriste de mieux comprendre votre situation."
              },
              {
                question: "Puis-je prolonger ma consultation au-delà de 15 minutes?",
                answer: "Les consultations sont limitées à 15 minutes pour permettre à un maximum de personnes d'en bénéficier. Si votre situation nécessite un suivi plus approfondi, nous pourrons vous orienter vers un professionnel adapté."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1B3B] rounded-lg overflow-hidden border border-[#404163]/30"
              >
                <div className="p-4 md:p-5 border-l-4 border-[#ED49AE]">
                  <h3 className="font-bold text-sm md:text-lg text-white mb-2">{item.question}</h3>
                  <p className="text-sm md:text-base text-[#E2E2E8] leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden sm:block" 
          onClick={() => scrollToNext(ctaRef)}
        >
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ED49AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Section CTA */}
      <section ref={ctaRef} className="py-12 md:py-20 bg-[#131426] border-t border-[#404163]/20">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-r from-[#ED49AE]/10 to-[#270B84]/10 rounded-xl p-6 md:p-12 shadow-lg max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Besoin d'un conseil juridique?</h2>
              <p className="text-sm md:text-lg mb-6 md:mb-8 text-[#E2E2E8]">
                N'attendez plus et réservez votre consultation gratuite dès aujourd'hui.
              </p>
              <Link 
                href="/reservation" 
                className="inline-block px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-[#ED49AE] to-[#270B84] text-white rounded-lg hover:from-[#f16bbd] hover:to-[#3a11b7] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#ED49AE]/20 text-sm md:text-base font-medium"
              >
                Réserver votre consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}