import { defineStore } from 'pinia'
import { api } from '@/api/client'

export const useWorkoutsStore = defineStore('workouts', {
  state: () => ({
    currentSession: null,
    status: 'idle',
    error: null,
  }),
  actions: {
    async fetchTodayWorkout() {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.get('/api/workouts/today')
        this.currentSession = res.data?.session || null
        this.status = 'success'
      } catch (err) {
        // MVP fallback: a single strength session.
        this.currentSession = {
          id: 'sample-session',
          workoutType: 'Strength',
          dayLabel: 'Day 3 · Hero Training',
          exercises: [
            { name: 'Anime Push-Up', category: 'Strength', repsTarget: 12, sets: 3, restSec: 60 },
            { name: 'Neon Pull Row', category: 'Strength', repsTarget: 10, sets: 3, restSec: 60 },
            { name: 'Core Spirit Plank', category: 'Agility', repsTarget: 45, sets: 3, restSec: 30, unit: 'sec' },
          ],
        }
        this.status = 'success'
        this.error = err
      }
    },
  },
})

