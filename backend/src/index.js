import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'
import charactersRoutes from './routes/characters.js'
import profileRoutes from './routes/profile.js'
import progressRoutes from './routes/progress.js'
import workoutsRoutes from './routes/workouts.js'
import missionsRoutes from './routes/missions.js'
import { prisma } from './prisma.js'
import { requireAuth } from './middleware/auth.js'
import achievementsRoutes from './routes/achievements.js'

dotenv.config()

const app = express()
app.use(cors({
  origin: ['http://localhost:5173', 'https://anime-form-l6fx-andydev-1s-projects.vercel.app/']

  credentials: true,
}))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.get('/api/me', requireAuth, async (req, res) => {
  const userId = req.user.id
  const user = await prisma.users.findUnique({
    where: { id: userId },
    select: { id: true, email: true, role: true },
  })

  return res.json({
    user: user || null,
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/characters', charactersRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/missions', missionsRoutes)
app.use('/api/workouts', workoutsRoutes)
app.use('/api/achievements', achievementsRoutes)

// Ensure we always return JSON errors for the frontend.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err)
  const message = err?.message || 'Internal server error'
  res.status(500).json({ message })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`ANIMAFORM backend listening on http://localhost:${port}`)
})

