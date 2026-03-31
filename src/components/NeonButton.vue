<script setup>
const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, default: null },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
})
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
    :class="{ 'pointer-events-none opacity-60': disabled }"
  >
    {{ label }}
  </RouterLink>

  <button
    v-else
    :type="type"
    class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
    :disabled="disabled"
    :class="{ 'opacity-60': disabled }"
  >
    {{ label }}
  </button>
</template>

