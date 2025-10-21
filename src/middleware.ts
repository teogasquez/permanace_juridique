import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ignorer la page de login
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }

  // Protection des routes admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin-token')
    
    // Si pas de token, redirection vers login
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

// Spécifier les routes à protéger
export const config = {
  matcher: [
    '/admin',
    '/admin/:path*'
  ]
}