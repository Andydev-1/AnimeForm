import express from 'express'

import { prisma } from '../prisma.js'
import { requireAuth } from '../middleware/auth.js'

const rankFromXp = (xp) => {
  if (xp < 300) return 'D'
  if (xp < 700) return 'C'
  if (xp < 1200) return 'B'
  if (xp < 1800) return 'A'
  return 'S'
}

const normalizeDateKey = (d) => {
  // Use local date for streak consistency with user's routine.
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function calcStreak(dayKeysSortedDesc) {
  // Input: array of distinct day keys sorted desc (newest first)
  if (!dayKeysSortedDesc.length) return 0
  const dayMs = 24 * 60 * 60 * 1000

  let streak = 1
  let prev = new Date(dayKeysSortedDesc[0])

  for (let i = 1; i < dayKeysSortedDesc.length; i++) {
    const current = new Date(dayKeysSortedDesc[i])
    const diffDays = Math.round((prev - current) / dayMs)
    if (diffDays === 1) {
      streak += 1
      prev = current
    } else {
      break
    }
  }
  return streak
}

const router = express.Router()

router.get('/', requireAuth, async (req, res) => {
  const userId = req.user.id

  const xpAgg = await prisma.progressLogs.aggregate({
    where: { userId, type: 'XP' },
    _sum: { value: true },
  })

  const xp = xpAgg._sum.value ?? 0
  const rank = rankFromXp(xp)

  const completions = await prisma.progressLogs.findMany({
    where: { userId, type: 'WORKOUT_COMPLETED' },
    select: { loggedAt: true },
    orderBy: { loggedAt: 'desc' },
  })

  const distinctDayKeys = Array.from(
    new Set(completions.map((c) => normalizeDateKey(c.loggedAt)))
  )

  const streak = calcStreak(distinctDayKeys)

  return res.json({
    xp,
    rank,
    streak,
  })
})

export default router

