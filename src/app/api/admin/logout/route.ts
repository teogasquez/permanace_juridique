import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  // Supprimer le cookie
  cookies().delete('admin-token')
  return NextResponse.json({ success: true })
}