import { defineStore } from 'pinia'
import { api, setAuthToken } from '@/api/client'

const TOKEN_KEY = 'animafrom_token'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem(TOKEN_KEY) || null,
    user: null,
    status: 'idle', // idle | loading | success | error
    error: null,
  }),
  getters: {
    isAuthenticated: (s) => Boolean(s.token),
  },
  actions: {
    async hydrate() {
      // Ensures app refresh keeps auth token (and reloads user/role for nav visibility).
      if (!this.token) return
      setAuthToken(this.token)
      try {
        await this.fetchMe()
      } catch {
        // Keep local token even if /me fails (e.g., expired token).
      }
    },
    async login({ email, password }) {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.post('/api/auth/login', { email, password })
        this.token = res.data?.token || null
        localStorage.setItem(TOKEN_KEY, this.token || '')
        setAuthToken(this.token)
        await this.fetchMe()
        this.status = 'success'
      } catch (err) {
        this.status = 'error'
        this.error = err?.response?.data?.message || 'Login failed'
        throw err
      }
    },
    async register({ email, password }) {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.post('/api/auth/register', { email, password })
        this.token = res.data?.token || null
        localStorage.setItem(TOKEN_KEY, this.token || '')
        setAuthToken(this.token)
        await this.fetchMe()
        this.status = 'success'
      } catch (err) {
        this.status = 'error'
        this.error = err?.response?.data?.message || 'Sign up failed'
        throw err
      }
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem(TOKEN_KEY)
      setAuthToken(null)
    },
    async fetchMe() {
      const res = await api.get('/api/me')
      this.user = res.data?.user || null
    },
  },
})

