<script setup>
const props = defineProps({
  xp: { type: Number, required: true },
  rank: { type: String, required: true }, // D -> S
})

// Simple MVP thresholds; backend can replace with DB-driven config later.
const rankOrder = ['D', 'C', 'B', 'A', 'S']
const rankToMinXp = {
  D: 0,
  C: 300,
  B: 700,
  A: 1200,
  S: 1800,
}
const rankToMaxXp = {
  D: 299,
  C: 699,
  B: 1199,
  A: 1799,
  S: 999999,
}

const idx = rankOrder.indexOf(props.rank)
const clampedIdx = idx >= 0 ? idx : 0
const currentRank = rankOrder[clampedIdx]

const minXp = rankToMinXp[currentRank] ?? 0
const maxXp = rankToMaxXp[currentRank] ?? (minXp + 1)
const progress = Math.max(0, Math.min(1, (props.xp - minXp) / (maxXp - minXp || 1)))
</script>

<template>
  <div>
    <div class="flex items-center justify-between gap-3">
      <div class="anime-font text-sm font-black text-white/80">
        Rank <span class="text-neonPurple">{{ currentRank }}</span>
      </div>
      <div class="text-xs text-white/60">{{ Math.floor(progress * 100) }}%</div>
    </div>
    <div class="mt-2 h-3 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
      <div
        class="h-full rounded-full bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange transition-all"
        :style="{ width: `${progress * 100}%` }"
      />
    </div>
  </div>
</template>

