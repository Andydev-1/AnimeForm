<template>
  <div class="space-y-6">
    <NeonCard>
      <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div class="anime-font text-2xl font-black text-white">Today&apos;s workout</div>
          <div class="mt-1 text-sm text-white/70">
            {{ session?.dayLabel || '—' }} · {{ session?.workoutType || '—' }}
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <div class="text-xs font-semibold text-white/60">Timer</div>
            <div class="anime-font text-2xl font-black text-white">{{ formattedTime }}</div>
          </div>
          <button
            type="button"
            class="rounded-xl bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange px-5 py-3 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
            @click="toggleTimer"
          >
            {{ running ? 'Pause' : 'Start' }}
          </button>
        </div>
      </div>
    </NeonCard>

    <NeonCard>
      <div class="anime-font text-xl font-black text-white">Exercise list</div>
      <div class="mt-4 space-y-3">
        <div
          v-for="(ex, idx) in session?.exercises || []"
          :key="idx"
          class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-semibold text-white">{{ ex.name }}</div>
              <div class="text-xs text-white/60">
                {{ ex.category }} · {{ ex.sets }} sets · target
                {{ ex.repsTarget }}{{ ex.unit ? ` ${ex.unit}` : '' }}
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs font-semibold text-white/60">Completed sets</div>
              <div class="mt-1 flex items-center gap-2 justify-end">
                <button
                  type="button"
                  class="rounded-xl bg-white/5 px-3 py-1 ring-1 ring-white/10 transition hover:bg-white/10"
                  @click="decrementSet(idx)"
                >
                  -
                </button>
                <div class="anime-font text-lg font-black text-neonCyan w-8 text-center">{{ completedSets[idx] || 0 }}</div>
                <button
                  type="button"
                  class="rounded-xl bg-white/5 px-3 py-1 ring-1 ring-white/10 transition hover:bg-white/10"
                  @click="incrementSet(idx)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          class="rounded-xl bg-white/5 px-5 py-2.5 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/10"
          @click="reset"
        >
          Reset
        </button>
        <button
          type="button"
          class="rounded-xl bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
          @click="completeWorkout"
          :disabled="!canComplete"
          :class="{ 'opacity-60 pointer-events-none': !canComplete }"
        >
          Complete & earn XP
        </button>
      </div>
    </NeonCard>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import NeonCard from '@/components/NeonCard.vue'
import { useWorkoutsStore } from '@/stores/workouts'
import { useProgressStore } from '@/stores/progress'
import { useRouter } from 'vue-router'
import { api } from '@/api/client'

const router = useRouter()
const workouts = useWorkoutsStore()
const progress = useProgressStore()

const session = computed(() => workouts.currentSession)

const running = ref(false)
const elapsedMs = ref(0)
let intervalId = null

const formattedTime = computed(() => {
  const totalSeconds = Math.floor(elapsedMs.value / 1000)
  const mm = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const ss = String(totalSeconds % 60).padStart(2, '0')
  return `${mm}:${ss}`
})

const completedSets = ref([])

function initSets() {
  completedSets.value = (session.value?.exercises || []).map(() => 0)
}

function toggleTimer() {
  running.value = !running.value
  if (running.value) {
    intervalId = setInterval(() => {
      elapsedMs.value += 1000
    }, 1000)
  } else if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

function incrementSet(i) {
  const ex = session.value?.exercises?.[i]
  if (!ex) return
  completedSets.value[i] = Math.min(ex.sets, (completedSets.value[i] || 0) + 1)
}

function decrementSet(i) {
  const ex = session.value?.exercises?.[i]
  if (!ex) return
  completedSets.value[i] = Math.max(0, (completedSets.value[i] || 0) - 1)
}

const canComplete = computed(() => {
  const list = session.value?.exercises || []
  if (!list.length) return false
  return list.every((ex, i) => (completedSets.value[i] || 0) >= (ex.sets || 0))
})

function reset() {
  if (intervalId) clearInterval(intervalId)
  intervalId = null
  running.value = false
  elapsedMs.value = 0
  initSets()
}

async function completeWorkout() {
  if (!session.value?.id) return
  const payload = {
    workoutId: session.value.id,
    completedSets: completedSets.value,
  }

  // MVP fallback: if workout came from sample data, avoid calling the backend.
  if (session.value.id === 'sample-session') {
    progress.xp += 60
    progress.streak += 1
    progress.dailyMission = {
      title: 'Mission completed',
      detail: 'Nice work. Come back tomorrow for the next one.',
    }
  } else {
    await api.post('/api/workouts/complete', payload)
  }

  running.value = false
  if (intervalId) clearInterval(intervalId)
  intervalId = null

  await progress.fetchProgress().catch(() => {})
  await progress.fetchDailyMission().catch(() => {})
  router.push('/dashboard')
}

onMounted(async () => {
  await workouts.fetchTodayWorkout()
  initSets()
})
</script>

