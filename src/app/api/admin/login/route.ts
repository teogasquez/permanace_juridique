import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const body = await request.json()
  
  if (body.email === process.env.ADMIN_EMAIL && body.password === process.env.ADMIN_PASSWORD) {
    // Ajouter une expiration au cookie (par exemple 1 heure)
    cookies().set('admin-token', 'votre_token_secret', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600, // 1 heure en secondes
      sameSite: 'strict'
    })
    return NextResponse.json({ success: true })
  }
  
  return NextResponse.json({ error: 'Identifiants incorrects' }, { status: 401 })
}