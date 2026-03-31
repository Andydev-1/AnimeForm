import express from 'express'

import { prisma } from '../prisma.js'
import { requireAuth } from '../middleware/auth.js'

const normalizeDateKey = (d) => {
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const calcStreak = (dayKeysSortedDesc) => {
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
    } else break
  }
  return streak
}

const router = express.Router()

router.get('/', requireAuth, async (req, res) => {
  const userId = req.user.id

  const [xpAgg, completions, achievements] = await Promise.all([
    prisma.progressLogs.aggregate({
      where: { userId, type: 'XP' },
      _sum: { value: true },
    }),
    prisma.progressLogs.findMany({
      where: { userId, type: 'WORKOUT_COMPLETED' },
      select: { loggedAt: true },
      orderBy: { loggedAt: 'desc' },
    }),
    prisma.achievements.findMany({
      where: { isHidden: false },
    }),
  ])

  const xp = xpAgg._sum.value ?? 0
  const distinctDayKeys = Array.from(new Set(completions.map((c) => normalizeDateKey(c.loggedAt))))
  const streak = calcStreak(distinctDayKeys)

  const workoutsCompletedCount = completions.length

  // Upsert unlocked achievements so UI can query consistently later.
  const unlocks = []
  for (const a of achievements) {
    let unlocked = false
    if (a.criteriaType === 'xp_total_at_least') unlocked = xp >= a.criteriaValue
    if (a.criteriaType === 'streak_at_least') unlocked = streak >= a.criteriaValue
    if (a.criteriaType === 'workouts_completed_at_least') unlocked = workoutsCompletedCount >= a.criteriaValue

    if (unlocked) {
      unlocks.push(
        prisma.userAchievements.upsert({
          where: { userId_achievementId: { userId, achievementId: a.id } },
          update: {},
          create: { userId, achievementId: a.id },
        })
      )
    }
  }

  await Promise.all(unlocks)

  const userAchievements = await prisma.userAchievements.findMany({
    where: { userId },
    include: { achievement: true },
    orderBy: { unlockedAt: 'desc' },
  })

  return res.json({
    unlocked: userAchievements.map((ua) => ({
      key: ua.achievement.key,
      name: ua.achievement.name,
      description: ua.achievement.description,
      unlockedAt: ua.unlockedAt,
    })),
  })
})

export default router

