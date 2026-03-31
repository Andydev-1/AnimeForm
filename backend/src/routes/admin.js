import express from 'express'

import { prisma } from '../prisma.js'
import { requireAuth } from '../middleware/auth.js'

const router = express.Router()

function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Admin only' })
  return next()
}

router.use(requireAuth, requireAdmin)

router.get('/characters', async (req, res) => {
  const characters = await prisma.characters.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return res.json({ characters })
})

router.post('/characters', async (req, res) => {
  const { name, bodyType, difficulty, trainingStyle, xpModifier } = req.body || {}
  if (!name || !bodyType || !difficulty || !trainingStyle) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const character = await prisma.characters.create({
    data: {
      name,
      bodyType,
      difficulty,
      trainingStyle,
      xpModifier: xpModifier ? Number(xpModifier) : undefined,
    },
  })

  return res.status(201).json({ character })
})

export default router

