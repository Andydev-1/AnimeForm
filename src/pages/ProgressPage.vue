<template>
  <div class="space-y-6">
    <NeonCard>
      <div class="anime-font text-2xl font-black text-white">Progress</div>
      <div class="mt-2 text-sm text-white/70">Weight trend, workout completion stats, and rank milestones.</div>
    </NeonCard>

    <NeonCard>
      <div class="flex items-center justify-between gap-4">
        <div>
          <div class="text-sm font-semibold text-white/80">Weight (sample)</div>
          <div class="text-xs text-white/60">Connect this to `ProgressLogs` once backend is ready.</div>
        </div>
        <div class="rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
          <div class="text-xs text-white/60">Current rank</div>
          <div class="anime-font text-lg font-black text-neonPurple">{{ progress.rank }}</div>
        </div>
      </div>

      <div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div v-for="(v, i) in weightTrend" :key="i" class="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <div class="text-xs text-white/60">{{ v.label }}</div>
          <div class="mt-1 anime-font text-lg font-black text-white">{{ v.value }}kg</div>
          <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
            <div class="h-full rounded-full bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange" :style="{ width: `${v.bar}%` }" />
          </div>
        </div>
      </div>
    </NeonCard>

    <NeonCard>
      <div class="anime-font text-xl font-black text-white">Weekly challenges (MVP)</div>
      <div class="mt-3 space-y-3">
        <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          <div class="text-sm font-semibold text-white">Complete 3 workouts</div>
          <div class="mt-1 text-xs text-white/60">+120 XP if you hit the streak condition.</div>
        </div>
        <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          <div class="text-sm font-semibold text-white">Log 10 sets across categories</div>
          <div class="mt-1 text-xs text-white/60">Strength + Endurance + Agility + Mobility counts.</div>
        </div>
      </div>
    </NeonCard>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import NeonCard from '@/components/NeonCard.vue'
import { useProgressStore } from '@/stores/progress'

const progress = useProgressStore()

onMounted(async () => {
  await progress.fetchProgress()
  await progress.fetchDailyMission()
})

const weightTrend = computed(() => {
  // Placeholder trend; backend will supply from ProgressLogs.
  return [
    { label: 'Mon', value: 71, bar: 58 },
    { label: 'Tue', value: 71.2, bar: 60 },
    { label: 'Wed', value: 70.9, bar: 57 },
    { label: 'Now', value: 70.5, bar: 55 },
  ]
})
</script>

