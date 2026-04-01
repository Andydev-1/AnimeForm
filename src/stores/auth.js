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
      if (!this.token) return
      setAuthToken(this.token)
      try {
        await this.fetchMe()
      } catch {
        // Still keep local token, do not error out
      }
    },

    async login({ email, password }) {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.post('/api/auth/login', { email, password })
        // backend returns { token, user }
        const token = res.data?.token
        if (!token) throw new Error('No token returned')
        this.token = token
        localStorage.setItem(TOKEN_KEY, token)
        setAuthToken(token)
        this.user = res.data?.user || null
        this.status = 'success'
        return true
      } catch (err) {
        this.status = 'error'
        // Network error check
        if (err?.response && err.response.data?.message) {
          this.error = err.response.data.message
        } else if (err?.response && err.response.status) {
          // Handle HTTP errors that don't return a message
          if (err.response.status === 0) {
            this.error = 'Unable to reach server. Please check your network.'
          } else {
            this.error = `Login failed (code ${err.response.status})`
          }
        } else if (err?.message && err.message === 'Network Error') {
          this.error = 'Network error: Unable to contact server.'
        } else if (err?.message) {
          this.error = err.message
        } else {
          this.error = 'Network error: Login failed. Try again later.'
        }
        this.token = null
        this.user = null
        localStorage.removeItem(TOKEN_KEY)
        setAuthToken(null)
        return false
      }
    },

    async register({ email, password }) {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.post('/api/auth/register', { email, password })
        // backend returns { token }
        const token = res.data?.token
        if (!token) throw new Error('No token received')
        this.token = token
        localStorage.setItem(TOKEN_KEY, token)
        setAuthToken(token)
        await this.fetchMe()
        this.status = 'success'
        return true
      } catch (err) {
        this.status = 'error'
        // Network error check
        if (err?.response && err.response.data?.message) {
          this.error = err.response.data.message
        } else if (err?.response && err.response.status) {
          if (err.response.status === 0) {
            this.error = 'Unable to reach server. Please check your network.'
          } else {
            this.error = `Sign up failed (code ${err.response.status})`
          }
        } else if (err?.message && err.message === 'Network Error') {
          this.error = 'Network error: Unable to contact server.'
        } else if (err?.message) {
          this.error = err.message
        } else {
          this.error = 'Network error: Sign up failed. Try again later.'
        }
        this.token = null
        this.user = null
        localStorage.removeItem(TOKEN_KEY)
        setAuthToken(null)
        return false
      }
    },

    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem(TOKEN_KEY)
      setAuthToken(null)
    },

    async fetchMe() {
      try {
        const res = await api.get('/api/me')
        if (!res.data?.user) throw new Error('No user info returned')
        this.user = res.data.user
      } catch (err) {
        this.user = null
        if (err?.response && [401, 403].includes(err.response.status)) {
          this.token = null
          localStorage.removeItem(TOKEN_KEY)
          setAuthToken(null)
        }
        throw err
      }
    },
  },
})
