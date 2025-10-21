import React from 'react'
import Link from 'next/link'

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#0A0B1C] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
          Mentions <span className="text-[#ED49AE]">Légales</span>
        </h1>
        
        <div className="bg-[#1A1B3B] rounded-xl shadow-lg p-6 md:p-8 text-[#E2E2E8]">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">Informations sur l'entreprise</h2>
            <p className="mb-2"><strong>Nom de l'entreprise :</strong> Permanence Juridique du samedi</p>
            <p className="mb-2"><strong>Forme juridique :</strong> Société simple</p>
            <p className="mb-2"><strong>Adresse :</strong> Av. de Provence 4, 1007 Lausanne, Suisse</p>
            <p className="mb-2"><strong>Email de contact :</strong> pjs@hotmail.ch</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">Hébergement du site</h2>
            <p className="mb-2"><strong>Nom de l'hébergeur :</strong> Infomaniak</p>
            <p className="mb-2"><strong>Adresse :</strong> Rue Eugène-Marziano 25, 1227 Genève</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">Activité</h2>
            <p className="mb-2">
              Les services juridiques sont fournis par des juristes qualifiés conformément 
              aux lois et règlements suisses applicables.
            </p>
          </section>

          <div className="mt-8 text-center">
            <Link href="/" className="text-[#ED49AE] hover:text-[#f16bbd] transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}