'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { format, addDays, isSaturday } from 'date-fns'
import { fr } from 'date-fns/locale'
import ReCAPTCHA from "react-google-recaptcha" // Import du composant reCAPTCHA

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function Reservation() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null) // Référence pour le reCAPTCHA
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: ''
  })
  // Ajout des nouveaux états pour les erreurs de validation
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  // État pour stocker la valeur du captcha
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState('') // Nouvel état pour les erreurs de CAPTCHA

  // Générer les 8 prochains samedis
  useEffect(() => {
    const dates: Date[] = []
    let currentDate = new Date()
    
    while (dates.length < 8) {
      if (isSaturday(currentDate)) {
        dates.push(new Date(currentDate))
      }
      currentDate = addDays(currentDate, 1)
    }
    
    setAvailableDates(dates)
    setIsLoading(false)
  }, [])

// Générer les créneaux horaires pour le samedi sélectionné
const generateTimeSlots = async (date: Date) => {
  setIsLoading(true)
  
  try {
    // Génération des créneaux de base (tous disponibles)
    const baseSlots: TimeSlot[] = []
    for (let hour = 13; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        // Ajouter tous les créneaux de 13:00 à 18:45
        baseSlots.push({
          time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
          available: true
        })
      }
    }
    
    try {
      // Récupération des réservations existantes pour cette date
      const selectedDateStr = format(date, 'yyyy-MM-dd')
      const response = await fetch(`/api/booking/slots?date=${selectedDateStr}`)
      
      if (response.ok) {
        const data = await response.json()
        
        if (data.slots && Array.isArray(data.slots)) {
          // Créer un ensemble de créneaux réservés
          const bookedSlots = new Set(
            data.slots
              .filter((s: any) => s.date === selectedDateStr)
              .map((s: any) => s.time)
          )
          
          // Marquer les créneaux réservés comme non disponibles
          baseSlots.forEach(slot => {
            if (bookedSlots.has(slot.time)) {
              slot.available = false
            }
          })
        }
      }
    } catch (apiError) {
      console.error('Erreur lors de la récupération des réservations:', apiError)
      // Continuer avec les créneaux de base en cas d'erreur
    }
    
    setAvailableTimeSlots(baseSlots)
  } catch (err) {
    console.error('Erreur générale:', err)
    generateDefaultTimeSlots() // Fallback en cas d'erreur générale
  } finally {
    setIsLoading(false)
  }
}

  // Fonction de secours pour générer des créneaux horaires
  const generateDefaultTimeSlots = () => {
    const baseSlots: TimeSlot[] = []
    for (let hour = 13; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        if (hour === 17 && minute > 30) continue
        baseSlots.push({
          time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
          available: true
        })
      }
    }
    setAvailableTimeSlots(baseSlots)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedSlot(null)
    generateTimeSlots(date)
  }

  const handleSlotSelect = (time: string) => {
    setSelectedSlot(time)
    setError('')
    
    // Faire défiler jusqu'au formulaire
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  // Fonction pour gérer le changement du reCAPTCHA
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaToken(value);
    if (value) {
      setCaptchaError('');
    }
  }

  // Ajout des fonctions de validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailRegex.test(email)
  }

  const isValidPhoneNumber = (phone: string): boolean => {
    // Si le champ est vide et n'est pas requis, on considère que c'est valide
    if (!phone) return true
    
    // Accepte les formats suisses et internationaux courants
    // Ex: +41791234567, 0791234567, +33 6 12 34 56 78, etc.
    const phoneRegex = /^(?:(?:\+|00)(?:33|41|[1-9]\d{0,2})\s?|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    return phoneRegex.test(phone)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Réinitialiser les messages d'erreur
    setError('')
    setEmailError('')
    setPhoneError('')
    setCaptchaError('')
    
    // Vérification du CAPTCHA
    if (!captchaToken) {
      setCaptchaError("Veuillez confirmer que vous n'êtes pas un robot");
      return;
    }
    
    // Validation de l'email et du téléphone
    if (!isValidEmail(formData.email)) {
      setEmailError('Veuillez entrer une adresse email valide')
      return
    }
    
    if (formData.phone && !isValidPhoneNumber(formData.phone)) {
      setPhoneError('Veuillez entrer un numéro de téléphone valide')
      return
    }
    
    if (!selectedDate || !selectedSlot) {
      setError('Veuillez sélectionner une date et un créneau horaire')
      return
    }
    
    setIsSubmitting(true)
    setSuccessMessage('')

    try {
      // Appel à votre API existante avec le nouveau champ phone et le captchaToken
      const response = await fetch('/api/booking', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: format(selectedDate, 'yyyy-MM-dd'),
          time: selectedSlot,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          captchaToken: captchaToken // Ajout du token captcha
        }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Une erreur s'est produite")
      }
      
      // Réinitialiser le captcha
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      
      // Afficher un message de confirmation élégant
      setSuccessMessage('Rendez-vous confirmé avec succès! Un email de confirmation vous a été envoyé.')
      
      // Attendre 3 secondes avant de rediriger
      setTimeout(() => {
        router.push('/')
      }, 3000)
      
    } catch (error: any) {
      console.error('Erreur:', error)
      setError(error.message || "Une erreur s'est produite lors de la réservation. Veuillez réessayer.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0B1C] py-16">
      {successMessage && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 text-center font-medium z-50"
        >
          {successMessage}
        </motion.div>
      )}
      
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-white"
        >
          Réserver une <span className="text-[#ED49AE]">consultation juridique</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1A1B3B] rounded-xl shadow-lg p-6 md:p-8"
        >
          <h2 className="text-xl font-semibold mb-6 text-[#E2E2E8]">1. Choisissez une date</h2>
          
          {isLoading && !availableDates.length ? (
            <div className="flex justify-center my-8">
              <div className="w-8 h-8 border-4 border-[#ED49AE] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {availableDates.map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={`p-4 rounded-lg text-center transition-all ${
                    selectedDate && date.toDateString() === selectedDate.toDateString()
                      ? 'bg-[#ED49AE] text-white'
                      : 'bg-[#2A2B4B] text-[#E2E2E8] hover:bg-[#ED49AE]/20'
                  }`}
                >
                  <div className="font-bold">{format(date, 'EEEE', { locale: fr })}</div>
                  <div>{format(date, 'd MMMM', { locale: fr })}</div>
                </button>
              ))}
            </div>
          )}

          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <h2 className="text-xl font-semibold mb-6 text-[#E2E2E8]">2. Choisissez un horaire</h2>
              
              {isLoading ? (
                <div className="flex justify-center my-8">
                  <div className="w-8 h-8 border-4 border-[#ED49AE] border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {availableTimeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlotSelect(slot.time)}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg text-center transition-all ${
                        !slot.available
                          ? 'bg-gray-700/30 text-gray-500 cursor-not-allowed'
                          : selectedSlot === slot.time
                          ? 'bg-[#ED49AE] text-white'
                          : 'bg-[#2A2B4B] text-[#E2E2E8] hover:bg-[#ED49AE]/20'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="mt-12 space-y-4">
                <div>
                  <label className="block text-[#E2E2E8] mb-2">Nom complet</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-2 rounded-lg bg-[#2A2B4B] border border-[#404163] text-[#E2E2E8] focus:border-[#ED49AE] focus:ring-[#ED49AE]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#E2E2E8] mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full p-2 rounded-lg bg-[#2A2B4B] border ${
                      emailError ? 'border-red-500' : 'border-[#404163]'
                    } text-[#E2E2E8] focus:border-[#ED49AE] focus:ring-[#ED49AE]`}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#E2E2E8] mb-2">Numéro de téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full p-2 rounded-lg bg-[#2A2B4B] border ${
                      phoneError ? 'border-red-500' : 'border-[#404163]'
                    } text-[#E2E2E8] focus:border-[#ED49AE] focus:ring-[#ED49AE]`}
                    placeholder="+41 XX XXX XX XX"
                  />
                  {phoneError && (
                    <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#E2E2E8] mb-2">Sujet de la consultation</label>
                  <textarea
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full p-2 rounded-lg bg-[#2A2B4B] border border-[#404163] text-[#E2E2E8] focus:border-[#ED49AE] focus:ring-[#ED49AE]"
                    rows={3}
                    required
                  />
                </div>
                
                {/* Ajout du composant reCAPTCHA */}
                <div id="recaptcha-container" className="flex justify-center my-6">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={handleCaptchaChange}
                    theme="dark"
                  />
                </div>
                {captchaError && (
                  <p className="text-red-500 text-sm text-center">{captchaError}</p>
                )}
                
                <button
                  type="submit"
                  disabled={!selectedSlot || isSubmitting || !captchaToken}
                  className={`w-full mt-6 py-3 bg-linear-to-r from-[#ED49AE] to-[#270B84] text-white font-medium rounded-lg transition-all duration-300 ${
                    !selectedSlot || isSubmitting || !captchaToken
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:from-[#f16bbd] hover:to-[#3a11b7]'
                  }`}
                >
                  {isSubmitting ? 'Création en cours...' : 'Confirmer la réservation'}
                </button>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 p-4 bg-red-500/10 text-red-500 rounded-lg"
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}