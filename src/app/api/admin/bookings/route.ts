import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const prisma = new PrismaClient()

type Booking = {
  id: string
  date: Date
  time: string
  name: string
  email: string
  phone: string // Ajout du champ phone
  subject: string
  createdAt: Date
}

export async function GET(request: Request) {
  try {
    // Récupération avec tri par date
    const bookings = await prisma.booking.findMany({
      orderBy: [
        { date: 'asc' },
        { time: 'asc' }
      ]
    })
    
    if (bookings.length === 0) {
      return NextResponse.json({ 
        bookings: [],
        message: 'Aucune réservation trouvée'
      })
    }

    // Formatage des données avec date-fns
    return NextResponse.json({ 
      bookings: bookings.map((booking: any) => ({
        id: booking.id,
        date: format(booking.date, 'yyyy-MM-dd'),
        formattedDate: format(booking.date, 'dd MMMM yyyy', { locale: fr }),
        time: booking.time,
        name: booking.name,
        email: booking.email,
        phone: booking.phone || 'Non fourni', // Inclure le champ téléphone
        subject: booking.subject
      })),
      total: bookings.length
    })

  } catch (error) {
    console.error('Erreur de chargement:', error)
    return NextResponse.json(
      { error: 'Erreur lors du chargement des réservations' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const id = request.url.split('/').pop()

    if (!id) {
      return NextResponse.json(
        { error: 'Identifiant de réservation manquant' },
        { status: 400 }
      )
    }

    // Vérification de l'existence
    const booking = await prisma.booking.findUnique({
      where: { id }
    })

    if (!booking) {
      return NextResponse.json(
        { error: 'Réservation non trouvée' },
        { status: 404 }
      )
    }

    // Suppression
    await prisma.booking.delete({
      where: { id }
    })

    return NextResponse.json({
      success: true,
      message: 'Réservation supprimée avec succès',
      deletedId: id
    })

  } catch (error) {
    console.error('Erreur de suppression:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    )
  }
}