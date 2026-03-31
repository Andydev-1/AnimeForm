import { defineStore } from 'pinia'
import { api } from '@/api/client'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    heightCm: 170,
    weightKg: 70,
    goal: 'cut', // cut | maintain | bulk
    fitnessLevel: 'intermediate', // beginner | intermediate | advanced
    selectedCharacterId: null,
    status: 'idle',
    error: null,
  }),
  actions: {
    async fetchProfile() {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.get('/api/profile')
        const p = res.data?.profile
        if (p) {
          this.heightCm = p.heightCm ?? this.heightCm
          this.weightKg = p.weightKg ?? this.weightKg
          this.goal = p.goal ?? this.goal
          this.fitnessLevel = p.fitnessLevel ?? this.fitnessLevel
          this.selectedCharacterId = p.selectedCharacterId ?? this.selectedCharacterId
        }
        this.status = 'success'
      } catch (err) {
        this.status = 'success'
        this.error = err
      }
    },
    async saveProfile(payload) {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.put('/api/profile', payload)
        const p = res.data?.profile
        if (p) {
          this.heightCm = p.heightCm ?? this.heightCm
          this.weightKg = p.weightKg ?? this.weightKg
          this.goal = p.goal ?? this.goal
          this.fitnessLevel = p.fitnessLevel ?? this.fitnessLevel
          this.selectedCharacterId = p.selectedCharacterId ?? this.selectedCharacterId
        }
        this.status = 'success'
      } catch (err) {
        this.status = 'error'
        this.error = err?.response?.data?.message || 'Failed to save profile'
        throw err
      }
    },
  },
})

