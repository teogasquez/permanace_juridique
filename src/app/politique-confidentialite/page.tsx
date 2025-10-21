import React from 'react'
import Link from 'next/link'

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#0A0B1C] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
          Politique de <span className="text-[#ED49AE]">Confidentialité</span>
        </h1>
        
        <div className="bg-[#1A1B3B] rounded-xl shadow-lg p-6 md:p-8 text-[#E2E2E8]">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">1. Introduction</h2>
            <p className="mb-2">
              La présente politique de confidentialité explique comment notre permanence juridique du samedi 
              collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web et nos services. 
              Nous respectons votre vie privée conformément à la Loi fédérale sur la protection des données (LPD) et, 
              le cas échéant, au Règlement général sur la protection des données (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">2. Données collectées</h2>
            <p className="mb-2">
              Nous collectons les données personnelles suivantes lorsque vous utilisez notre système de réservation :
            </p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Nom complet</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Date et heure du rendez-vous souhaité</li>
              <li>Sujet de la consultation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">3. Finalités du traitement</h2>
            <p className="mb-2">
              Vos données personnelles sont collectées et traitées dans les buts suivants :
            </p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Gestion des rendez-vous et du calendrier de consultations</li>
              <li>Communication concernant votre rendez-vous (confirmation, rappels, modifications)</li>
              <li>Préparation de votre consultation juridique</li>
              <li>À des fins statistiques anonymisées pour améliorer nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">4. Base juridique du traitement</h2>
            <p className="mb-2">
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>L'exécution du contrat de prestation de services juridiques</li>
              <li>Votre consentement explicite lors de la prise de rendez-vous</li>
              <li>Notre intérêt légitime à gérer efficacement nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">5. Durée de conservation</h2>
            <p className="mb-2">
              Nous conservons vos données personnelles pour une durée de 5 ans après votre dernier rendez-vous, 
              conformément aux obligations légales applicables aux prestataires de services juridiques en Suisse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">6. Destinataires des données</h2>
            <p className="mb-2">
              Vos données personnelles ne sont accessibles qu'à notre personnel autorisé et ne sont pas transmises 
              à des tiers, sauf :
            </p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Avec votre consentement explicite</li>
              <li>Si la loi nous y oblige</li>
              <li>À nos sous-traitants (hébergeur du site, fournisseur du service d'emails) qui sont soumis à des obligations strictes de confidentialité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">7. Transfert international de données</h2>
            <p className="mb-2">
              Nos serveurs et ceux de nos sous-traitants sont situés en Suisse. Si vos données 
              devaient être transférées en dehors de ces territoires, nous nous assurerons que des garanties appropriées 
              sont en place pour protéger vos données.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">8. Sécurité des données</h2>
            <p className="mb-2">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
              personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">9. Cookies et technologies similaires</h2>
            <p className="mb-2">
              Notre site utilise des cookies essentiels au fonctionnement du site et des cookies analytiques pour améliorer 
              votre expérience. Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">10. Vos droits</h2>
            <p className="mb-2">
              Conformément à la législation suisse sur la protection des données, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de données inexactes</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mb-2">
              Pour exercer ces droits, veuillez nous contacter par email à pjs@hotmail.ch.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">11. Modifications de la politique de confidentialité</h2>
            <p className="mb-2">
              Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. 
              Les modifications seront publiées sur cette page avec la date de mise à jour.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">12. Contact</h2>
            <p className="mb-2">
              Pour toute question concernant la présente politique de confidentialité ou pour exercer vos droits 
              en matière de protection des données, veuillez nous contacter à :
            </p>
            <p className="mb-2">
              La permanence juridique du samedi<br />
              Av. de Provence 4<br />
              1007 Lausanne, Suisse<br />
              Email : pjs@hotmail.ch
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ED49AE]">13. Autorité de contrôle</h2>
            <p className="mb-2">
              Si vous estimez que le traitement de vos données personnelles constitue une violation de la législation 
              en vigueur, vous avez le droit d'introduire une réclamation auprès du Préposé fédéral à la protection 
              des données et à la transparence (PFPDT).
            </p>
          </section>

          <div className="mt-8 text-center">
            <p className="mb-4">Dernière mise à jour : 10 juin 2024</p>
            <Link href="/" className="text-[#ED49AE] hover:text-[#f16bbd] transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}