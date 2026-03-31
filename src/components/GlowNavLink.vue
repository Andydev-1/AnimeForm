<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <RouterLink
    :to="to"
    class="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition hover:text-white hover:shadow-[0_0_22px_rgba(168,85,247,0.55)]"
    :class="{
      'bg-white/5 ring-1 ring-white/10': $route.path === to,
    }"
  >
    {{ label }}
  </RouterLink>
</template>

