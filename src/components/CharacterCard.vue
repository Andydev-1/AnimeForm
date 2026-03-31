<script setup>
const props = defineProps({
  character: { type: Object, required: true },
  selected: { type: Boolean, default: false },
})

const emit = defineEmits(['select'])
</script>

<template>
  <button
    type="button"
    @click="emit('select', character.id)"
    class="group relative w-full rounded-2xl bg-white/5 p-4 text-left ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20"
    :class="selected ? 'ring-2 ring-neonPurple/70 bg-white/10' : ''"
  >
    <div class="flex items-start justify-between gap-3">
      <div>
        <div class="anime-font text-lg font-black text-white">
          {{ character.name }}
        </div>
        <div class="mt-1 text-xs text-white/60">
          {{ character.bodyType }} · {{ character.difficulty }}
        </div>
      </div>
      <div
        class="shrink-0 rounded-xl bg-gradient-to-br from-neonPurple/25 via-cyan-500/15 to-neonOrange/20 px-3 py-1 text-xs font-bold text-white/90 ring-1 ring-white/10"
      >
        {{ character.trainingStyle }}
      </div>
    </div>

    <div class="mt-3 flex gap-2">
      <span class="text-[11px] font-semibold text-neonCyan">XP+</span>
      <span class="text-[11px] text-white/65">{{ character.xpModifier || 1.0 }}x</span>
    </div>

    <div
      class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-lg transition group-hover:opacity-100"
      :class="selected ? 'bg-neonPurple/35' : 'bg-cyan-500/25'"
    />
  </button>
</template>

