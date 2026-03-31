import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/pages/Landing.vue'
import Login from '@/pages/Login.vue'
import Signup from '@/pages/Signup.vue'
import CharacterSelect from '@/pages/CharacterSelect.vue'
import Dashboard from '@/pages/Dashboard.vue'
import WorkoutPage from '@/pages/WorkoutPage.vue'
import ProfileSetup from '@/pages/ProfileSetup.vue'
import ProgressPage from '@/pages/ProgressPage.vue'
import AdminPanel from '@/pages/AdminPanel.vue'

import { useAuthStore } from '@/stores/auth.js'

function requireAuth(to, from, next) {
  const auth = useAuthStore()
  if (auth.isAuthenticated) return next()
  next('/login')
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Landing', component: Landing },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },

    { path: '/select-character', name: 'CharacterSelect', component: CharacterSelect, beforeEnter: requireAuth },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/workout', name: 'Workout', component: WorkoutPage, beforeEnter: requireAuth },
    { path: '/profile', name: 'ProfileSetup', component: ProfileSetup, beforeEnter: requireAuth },
    { path: '/progress', name: 'Progress', component: ProgressPage, beforeEnter: requireAuth },
    { path: '/admin', name: 'Admin', component: AdminPanel, beforeEnter: requireAuth },
  ],
})

