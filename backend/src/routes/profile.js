import express from 'express'

import { prisma } from '../prisma.js'
import { requireAuth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', requireAuth, async (req, res) => {
  const userId = req.user.id
  const profile = await prisma.profiles.findUnique({ where: { userId } })
  if (!profile) return res.status(404).json({ message: 'Profile not found' })

  return res.json({
    profile: {
      heightCm: profile.heightCm,
      weightKg: profile.weightKg,
      goal: profile.goal,
      fitnessLevel: profile.fitnessLevel,
      selectedCharacterId: profile.selectedCharacterId,
    },
  })
})

router.put('/', requireAuth, async (req, res) => {
  const userId = req.user.id
  const { heightCm, weightKg, goal, fitnessLevel, selectedCharacterId } = req.body || {}

  const updated = await prisma.profiles.upsert({
    where: { userId },
    update: {
      heightCm: Number(heightCm),
      weightKg: Number(weightKg),
      goal,
      fitnessLevel,
      selectedCharacterId: selectedCharacterId ?? null,
    },
    create: {
      userId,
      heightCm: Number(heightCm),
      weightKg: Number(weightKg),
      goal,
      fitnessLevel,
      selectedCharacterId: selectedCharacterId ?? null,
    },
  })

  return res.json({
    profile: {
      heightCm: updated.heightCm,
      weightKg: updated.weightKg,
      goal: updated.goal,
      fitnessLevel: updated.fitnessLevel,
      selectedCharacterId: updated.selectedCharacterId,
    },
  })
})

export default router

