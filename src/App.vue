<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

import NeonLogo from '@/components/NeonLogo.vue'
import GlowNavLink from '@/components/GlowNavLink.vue'
import gsap from 'gsap'

const auth = useAuthStore()
const route = useRoute()
const viewEl = ref(null)

onMounted(() => {
  auth.hydrate()
})

const navItems = computed(() => {
  const items = [
    { to: '/dashboard', label: 'Dashboard', show: auth.isAuthenticated },
    { to: '/workout', label: 'Workout', show: auth.isAuthenticated },
    { to: '/progress', label: 'Progress', show: auth.isAuthenticated },
    { to: '/profile', label: 'Profile', show: auth.isAuthenticated },
    { to: '/admin', label: 'Admin', show: auth.isAuthenticated && auth.user?.role === 'admin' },
  ]

  return items.filter((i) => i.show)
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    if (!viewEl.value) return
    gsap.fromTo(
      viewEl.value,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
    )
  }
)
</script>

<template>
  <div class="min-h-screen bg-animafront">
    <div class="mx-auto w-full max-w-6xl px-4 py-6">
      <header class="flex items-center justify-between gap-4">
        <NeonLogo />
        <nav v-if="navItems.length" class="hidden items-center gap-3 md:flex">
          <GlowNavLink v-for="item in navItems" :key="item.to" :to="item.to" :label="item.label" />
        </nav>
      </header>

      <main ref="viewEl" class="mt-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>

