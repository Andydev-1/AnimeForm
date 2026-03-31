import { defineStore } from 'pinia'
import { api } from '@/api/client'

export const useProgressStore = defineStore('progress', {
  state: () => ({
    xp: 420,
    rank: 'C',
    streak: 5,
    dailyMission: {
      title: 'Complete your daily mission',
      detail: 'Finish 20 minutes of strength work and log 1 set.',
    },
    status: 'idle',
    error: null,
  }),
  actions: {
    async fetchProgress() {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.get('/api/progress')
        const data = res.data || {}
        this.xp = data.xp ?? this.xp
        this.rank = data.rank ?? this.rank
        this.streak = data.streak ?? this.streak
        this.status = 'success'
      } catch (err) {
        this.status = 'success'
        this.error = err
      }
    },
    async fetchDailyMission() {
      try {
        const res = await api.get('/api/missions/daily')
        this.dailyMission = res.data?.mission || this.dailyMission
      } catch {
        // keep sample mission
      }
    },
  },
})

