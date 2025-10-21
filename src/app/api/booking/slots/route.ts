import { NextResponse } from 'next/server'
import { PrismaClient, Prisma } from '@prisma/client'
import { format } from 'date-fns'

const prisma = new PrismaClient()

type BookingWithDateAndTime = {
  date: Date
  time: string
}

export async function GET() {
  const bookings = await prisma.booking.findMany({
    select: {
      date: true,
      time: true
    }
  })

  const slots = bookings.map((booking: BookingWithDateAndTime) => ({
    date: format(booking.date, 'yyyy-MM-dd'),
    time: booking.time
  }))

  return NextResponse.json({ slots })
}