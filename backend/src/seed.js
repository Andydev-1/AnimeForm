import bcrypt from 'bcryptjs'

import { prisma } from './prisma.js'

const characterData = [
  { name: 'Kitsune', bodyType: 'Athletic', difficulty: 'beginner', trainingStyle: 'Agility Spirit', xpModifier: 1.1 },
  { name: 'Valkyrie', bodyType: 'Muscular', difficulty: 'intermediate', trainingStyle: 'Steel Endurance', xpModifier: 1.2 },
  { name: 'Shinobi', bodyType: 'Lean', difficulty: 'intermediate', trainingStyle: 'Shadow Mobility', xpModifier: 1.15 },
  { name: 'Dragonkin', bodyType: 'Bulky', difficulty: 'advanced', trainingStyle: 'Flame Strength', xpModifier: 1.25 },
  { name: 'Aether Mage', bodyType: 'Athletic', difficulty: 'beginner', trainingStyle: 'Breath Endurance', xpModifier: 1.05 },
  { name: 'Ranger', bodyType: 'Lean', difficulty: 'intermediate', trainingStyle: 'Trail Agility', xpModifier: 1.12 },
  { name: 'Titanheart', bodyType: 'Muscular', difficulty: 'advanced', trainingStyle: 'Core Power', xpModifier: 1.3 },
  { name: 'Nekomancer', bodyType: 'Athletic', difficulty: 'beginner', trainingStyle: 'Quick Recovery', xpModifier: 1.08 },
  { name: 'Cyber Ronin', bodyType: 'Lean', difficulty: 'intermediate', trainingStyle: 'Neon Footwork', xpModifier: 1.18 },
  { name: 'Ocean Samurai', bodyType: 'Muscular', difficulty: 'advanced', trainingStyle: 'Wave Strength', xpModifier: 1.22 },
]

const exercises = [
  // Strength
  { name: 'Anime Push-Up', category: 'Strength', unit: null },
  { name: 'Neon Pull Row', category: 'Strength', unit: null },
  { name: 'Manga Squat', category: 'Strength', unit: null },
  { name: 'Core Spirit Plank', category: 'Strength', unit: 'sec' },

  // Endurance
  { name: 'Breath Sprint', category: 'Endurance', unit: 'min' },
  { name: 'Starlight Jog', category: 'Endurance', unit: 'min' },
  { name: 'Tempo Run', category: 'Endurance', unit: 'min' },
  { name: 'Energy Cycle', category: 'Endurance', unit: 'min' },

  // Agility
  { name: 'Quick Cut Footwork', category: 'Agility', unit: null },
  { name: 'Rooftop Hop Series', category: 'Agility', unit: null },
  { name: 'Blade Shuffle', category: 'Agility', unit: null },
  { name: 'Neon Cone Drill', category: 'Agility', unit: null },

  // Mobility
  { name: 'Shadow Stretch', category: 'Mobility', unit: 'reps' },
  { name: 'Dragon Hip Opener', category: 'Mobility', unit: 'reps' },
  { name: 'Aether Shoulder Flow', category: 'Mobility', unit: 'reps' },
  { name: 'Ocean Spine Twist', category: 'Mobility', unit: 'reps' },
]

const achievementData = [
  { key: 'xp_total_500', name: 'First Spark', description: 'Reach 500 total XP.', criteriaType: 'xp_total_at_least', criteriaValue: 500 },
  { key: 'xp_total_1000', name: 'Heat Rising', description: 'Reach 1000 total XP.', criteriaType: 'xp_total_at_least', criteriaValue: 1000 },
  { key: 'xp_total_1800', name: 'S-Rank Seed', description: 'Reach 1800 total XP.', criteriaType: 'xp_total_at_least', criteriaValue: 1800 },
  { key: 'streak_3', name: 'Training Flame', description: 'Maintain a 3-day streak.', criteriaType: 'streak_at_least', criteriaValue: 3 },
  { key: 'streak_7', name: 'Neon Week', description: 'Maintain a 7-day streak.', criteriaType: 'streak_at_least', criteriaValue: 7 },
  { key: 'workouts_5', name: 'First Mission', description: 'Complete 5 workouts.', criteriaType: 'workouts_completed_at_least', criteriaValue: 5 },
]

async function main() {
  // Admin bootstrap (optional)
  const adminEmail = 'admin@animafrom.local'
  const adminPassword = 'admin123'
  const adminHash = await bcrypt.hash(adminPassword, 10)

  const existingAdmin = await prisma.users.findUnique({ where: { email: adminEmail } })
  if (!existingAdmin) {
    await prisma.users.create({
      data: {
        email: adminEmail,
        passwordHash: adminHash,
        role: 'admin',
        Profiles: {
          create: {
            heightCm: 175,
            weightKg: 72,
            goal: 'maintain',
            fitnessLevel: 'intermediate',
          },
        },
      },
    })
  }

  // Characters
  for (const c of characterData) {
    await prisma.characters.upsert({
      where: { name: c.name },
      update: { bodyType: c.bodyType, difficulty: c.difficulty, trainingStyle: c.trainingStyle, xpModifier: c.xpModifier, isActive: true },
      create: { name: c.name, bodyType: c.bodyType, difficulty: c.difficulty, trainingStyle: c.trainingStyle, xpModifier: c.xpModifier },
    })
  }

  // Exercises
  for (const e of exercises) {
    await prisma.exercises.create({
      data: {
        name: e.name,
        category: e.category,
        unit: e.unit,
      },
    })
  }

  // Achievements
  for (const a of achievementData) {
    await prisma.achievements.upsert({
      where: { key: a.key },
      update: {
        name: a.name,
        description: a.description,
        criteriaType: a.criteriaType,
        criteriaValue: a.criteriaValue,
        isHidden: false,
      },
      create: {
        key: a.key,
        name: a.name,
        description: a.description,
        criteriaType: a.criteriaType,
        criteriaValue: a.criteriaValue,
      },
    })
  }

  // Workouts/templates
  const allCharacters = await prisma.characters.findMany({ where: { isActive: true } })
  const exercisesByCategory = {}
  for (const ex of await prisma.exercises.findMany()) {
    exercisesByCategory[ex.category] ||= []
    exercisesByCategory[ex.category].push(ex)
  }

  const categoryCycle = ['Strength', 'Endurance', 'Agility', 'Mobility']

  for (const character of allCharacters) {
    for (let dayIndex = 0; dayIndex < categoryCycle.length; dayIndex++) {
      const category = categoryCycle[dayIndex]
      const workout = await prisma.workouts.create({
        data: {
          characterId: character.id,
          dayIndex,
          category,
          title: `${category} · Day ${dayIndex + 1}`,
          targetMin: category === 'Endurance' ? 20 : 15,
        },
      })

      const pool = exercisesByCategory[category] || []
      const chosen = pool.slice(0, 3)
      const withPlankOrFlow = category === 'Strength' ? pool.slice(0, 3) : chosen

      // Create 3 exercises per workout.
      const workoutExercises = withPlankOrFlow.map((ex, i) => {
        const sets = category === 'Endurance' ? 4 : 3
        const repsTarget =
          category === 'Endurance'
            ? 1
            : category === 'Mobility'
              ? 12
              : 10 + i
        return {
          exerciseId: ex.id,
          sortOrder: i,
          sets,
          repsTarget,
          restSec: category === 'Endurance' ? 45 : 60,
        }
      })

      for (const we of workoutExercises) {
        await prisma.workoutExercises.create({
          data: {
            workoutId: workout.id,
            exerciseId: we.exerciseId,
            sortOrder: we.sortOrder,
            sets: we.sets,
            repsTarget: we.repsTarget,
            restSec: we.restSec,
          },
        })
      }
    }
  }

  // eslint-disable-next-line no-console
  console.log('Seed complete')
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

