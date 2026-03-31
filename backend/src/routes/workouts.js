import express from 'express'

import { prisma } from '../prisma.js'
import { requireAuth } from '../middleware/auth.js'

const categoryMultiplier = {
  Strength: 1.0,
  Endurance: 0.95,
  Agility: 0.9,
  Mobility: 0.85,
}

const router = express.Router()

router.get('/today', requireAuth, async (req, res) => {
  const userId = req.user.id
  const profile = await prisma.profiles.findUnique({ where: { userId } })

  const characterId = profile?.selectedCharacterId
  const chosenCharacterId =
    characterId ||
    (
      await prisma.characters.findFirst({
        where: { isActive: true },
        select: { id: true },
      })
    )?.id

  if (!chosenCharacterId) return res.status(404).json({ message: 'No active character found' })

  // MVP schedule: cycle categories on a 4-day loop based on weekday.
  const dow = new Date().getDay() // 0..6
  const dayIndex = dow % 4

  const workout = await prisma.workouts.findFirst({
    where: { characterId: chosenCharacterId, dayIndex, isActive: true },
    include: {
      WorkoutExercises: {
        orderBy: { sortOrder: 'asc' },
        include: {
          exercise: {
            select: { name: true, category: true, unit: true },
          },
        },
      },
    },
  })

  if (!workout) return res.status(404).json({ message: 'No workout template found for today' })

  const exercises = workout.WorkoutExercises.map((we) => ({
    name: we.exercise.name,
    category: we.exercise.category,
    repsTarget: we.repsTarget,
    sets: we.sets,
    restSec: we.restSec,
    unit: we.exercise.unit,
  }))

  return res.json({
    session: {
      id: workout.id,
      workoutType: workout.category,
      dayLabel: `Day ${workout.dayIndex + 1}`,
      exercises,
      targetMin: workout.targetMin,
    },
  })
})

router.post('/complete', requireAuth, async (req, res) => {
  const userId = req.user.id
  const { workoutId, completedSets } = req.body || {}

  if (!workoutId) return res.status(400).json({ message: 'workoutId is required' })
  if (!Array.isArray(completedSets)) return res.status(400).json({ message: 'completedSets must be an array' })

  const workout = await prisma.workouts.findUnique({
    where: { id: workoutId },
    include: {
      character: { select: { id: true, xpModifier: true } },
      WorkoutExercises: {
        orderBy: { sortOrder: 'asc' },
        include: {
          exercise: { select: { category: true } },
        },
      },
    },
  })

  if (!workout) return res.status(404).json({ message: 'Workout not found' })

  const templateExercises = workout.WorkoutExercises
  if (completedSets.length !== templateExercises.length) {
    return res.status(400).json({
      message: 'completedSets length must match the exercise count',
    })
  }

  let totalXpEarned = 0
  const now = new Date()

  // Award XP per set completed (cap at template sets).
  for (let i = 0; i < templateExercises.length; i++) {
    const tpl = templateExercises[i]
    const completed = Number(completedSets[i] || 0)
    const capped = Math.max(0, Math.min(tpl.sets, completed))

    const mult = categoryMultiplier[tpl.exercise.category] ?? 1
    totalXpEarned += capped * 10 * mult * (workout.character?.xpModifier ?? 1)
  }

  const tx = await prisma.$transaction(async (p) => {
    const xpLog = await p.progressLogs.create({
      data: {
        userId,
        type: 'XP',
        value: totalXpEarned,
        workoutId: workout.id,
        meta: { awardedAt: now.toISOString() },
      },
    })

    const completedCount = completedSets.reduce((acc, n) => acc + Number(n || 0), 0)
    const workoutCompletedLog = await p.progressLogs.create({
      data: {
        userId,
        type: 'WORKOUT_COMPLETED',
        value: completedCount,
        workoutId: workout.id,
        meta: { completedSets },
      },
    })

    return { xpLog, workoutCompletedLog }
  })

  void tx

  return res.json({ xpEarned: totalXpEarned })
})

export default router

