// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client'

// Déclaration du type global pour éviter les erreurs TypeScript
declare global {
  var prisma: PrismaClient | undefined
}

// Création de l'instance unique de PrismaClient
export const prisma = global.prisma || new PrismaClient({
  log: ['error', 'warn'], // Activer les logs pour débogage
})

// Sauvegarder l'instance en développement pour éviter la création de multiples instances
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}