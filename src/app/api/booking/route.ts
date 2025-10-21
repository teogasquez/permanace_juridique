import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { prisma } from '@/lib/prisma' 

const resend = new Resend(process.env.RESEND_API_KEY)

// Fonction pour vérifier le captcha
async function verifyCaptcha(token: string) {
  try {
    const formData = new URLSearchParams();
    formData.append('secret', process.env.RECAPTCHA_SECRET_KEY || '');
    formData.append('response', token);
    
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    return data.success;
  } catch (error) {
    console.error('Erreur de vérification du captcha:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, subject, captchaToken } = body

    // Validation du captcha
    if (!captchaToken) {
      return NextResponse.json({ 
        error: 'Validation CAPTCHA requise' 
      }, { status: 400 })
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    
    if (!isCaptchaValid) {
      return NextResponse.json({ 
        error: 'Validation CAPTCHA échouée' 
      }, { status: 400 })
    }

    // Validation rapide des champs requis
    if (!name || !email || !date || !time || !subject) {
      return NextResponse.json({ 
        error: 'Tous les champs obligatoires doivent être remplis' 
      }, { status: 400 })
    }

    // Vérifier si le créneau est déjà réservé
    const existingBooking = await prisma.booking.findFirst({
      where: {
        date: new Date(date),
        time: time
      }
    })

    if (existingBooking) {
      return NextResponse.json({ 
        error: 'Ce créneau est déjà réservé' 
      }, { status: 400 })
    }

    // Créer la réservation avec le numéro de téléphone
    // Utiliser l'assertion de type pour contourner l'erreur TypeScript
    const booking = await prisma.booking.create({
      data: {
        date: new Date(date),
        time,
        name,
        email,
        phone: phone || "",
        subject
      } as any // Contourner l'erreur TypeScript temporairement
    })

    // Envoyer l'email avec gestion d'erreur pour ne pas bloquer la réservation
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: 'Confirmation de votre rendez-vous',
        html: `
          <h1>Confirmation de votre rendez-vous</h1>
          <p>Bonjour ${name},</p>
          <p>Votre rendez-vous a bien été enregistré :</p>
          <p>Rendez vous à Av. de Provence 4, 1007 Lausanne, Suisse</p>
          <ul>
            <li>Date : ${date}</li>
            <li>Heure : ${time}</li>
            <li>Téléphone : ${phone || 'Non fourni'}</li>
            <li>Sujet : ${subject}</li>
          </ul>
          <p>À bientôt !</p>
        `
      })
    } catch (emailError) {
      // Ne pas échouer la réservation si l'email ne part pas
      console.error('Erreur lors de l\'envoi de l\'email:', emailError)
    }

    return NextResponse.json({ 
      success: true,
      message: 'Réservation confirmée', 
      booking 
    })
  } catch (error) {
    console.error('Erreur détaillée lors de la réservation:', error)
    return NextResponse.json({ error: 'Erreur lors de la réservation' }, { status: 500 })
  }
}