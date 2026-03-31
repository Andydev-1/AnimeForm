<template>
  <div class="max-w-md">
    <NeonCard>
      <div class="anime-font text-2xl font-black text-white">Login</div>
      <p class="mt-2 text-sm text-white/70">Welcome back. Continue your training arc.</p>

      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <label class="block">
          <span class="text-sm font-semibold text-white/80">Email</span>
          <input
            v-model="email"
            type="email"
            required
            class="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-neonPurple/60"
            placeholder="you@example.com"
          />
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-white/80">Password</span>
          <input
            v-model="password"
            type="password"
            required
            class="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-neonPurple/60"
            placeholder="••••••••"
          />
        </label>

        <div class="flex items-center gap-3">
          <button
            type="submit"
            class="flex-1 rounded-xl bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange px-4 py-3 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
            :disabled="auth.status === 'loading'"
          >
            {{ auth.status === 'loading' ? 'Signing in...' : 'Login' }}
          </button>
        </div>

        <p v-if="auth.error" class="text-sm text-red-300">{{ auth.error }}</p>
      </form>

      <div class="mt-5 text-sm text-white/70">
        New here?
        <RouterLink class="text-neonCyan font-semibold hover:underline" to="/signup">Create an account</RouterLink>
      </div>
    </NeonCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import NeonCard from '@/components/NeonCard.vue'

const router = useRouter()
const auth = useAuthStore()

const email = ref('')
const password = ref('')

onMounted(() => {
  auth.hydrate()
})

async function onSubmit() {
  await auth.login({ email: email.value, password: password.value })
  router.push('/select-character')
}
</script>

