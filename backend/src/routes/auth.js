import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { prisma } from '../prisma.js'

const router = express.Router()

function signToken(user) {
  return jwt.sign({ role: user.role }, process.env.JWT_SECRET, {
    subject: user.id,
    expiresIn: '7d',
  })
}

router.post('/register', async (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' })

  const existing = await prisma.users.findUnique({ where: { email } })
  if (existing) return res.status(409).json({ message: 'Email already in use' })

  const passwordHash = await bcrypt.hash(password, 10)
  const user = await prisma.users.create({
    data: {
      email,
      passwordHash,
      role: 'user',
      Profiles: {
        create: {
          heightCm: 170,
          weightKg: 70,
          goal: 'maintain',
          fitnessLevel: 'intermediate',
        },
      },
    },
    include: { Profiles: true },
  })

  const token = signToken(user)
  return res.status(201).json({
    token,
    user: { id: user.id, email: user.email, role: user.role },
  })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' })

  const user = await prisma.users.findUnique({ where: { email } })
  if (!user) return res.status(401).json({ message: 'Invalid credentials' })

  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' })

  const token = signToken(user)
  return res.json({
    token,
    user: { id: user.id, email: user.email, role: user.role },
  })
})

export default router

