import express from 'express'

import { prisma } from '../prisma.js'
import { requireAuth } from '../middleware/auth.js'

const router = express.Router()

const categoryByDow = ['Strength', 'Endurance', 'Agility', 'Mobility']

router.get('/daily', requireAuth, async (req, res) => {
  const userId = req.user.id
  const profile = await prisma.profiles.findUnique({ where: { userId } })

  const dow = new Date().getDay() // 0..6 (Sun..Sat)
  const category = categoryByDow[dow % categoryByDow.length]

  const targetSets = category === 'Strength' ? 3 : category === 'Endurance' ? 4 : 3
  const targetMinutes = category === 'Endurance' ? 20 : 15

  const title = `Daily mission: ${category}`
  const detail = `Complete ${targetMinutes} minutes (${category}) and log at least ${targetSets} sets.`

  // Keep response shape compatible with frontend store.
  return res.json({
    mission: {
      title,
      detail,
      category,
      targetSets,
    },
    profileCharacterId: profile?.selectedCharacterId || null,
  })
})

export default router

