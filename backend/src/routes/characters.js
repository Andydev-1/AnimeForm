import express from 'express'

import { prisma } from '../prisma.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const characters = await prisma.characters.findMany({
    where: { isActive: true },
    select: {
      id: true,
      name: true,
      bodyType: true,
      difficulty: true,
      trainingStyle: true,
      xpModifier: true,
      isActive: true,
    },
    orderBy: { createdAt: 'asc' },
  })

  return res.json({ characters })
})

export default router

