<template>
  <div class="max-w-2xl">
    <NeonCard>
      <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="anime-font text-2xl font-black text-white">Profile setup</div>
          <div class="mt-2 text-sm text-white/70">Height, weight, goal, and fitness level help tune workouts and diet suggestions.</div>
        </div>
      </div>

      <form class="mt-6 grid gap-4 md:grid-cols-2" @submit.prevent="onSubmit">
        <label class="block">
          <span class="text-sm font-semibold text-white/80">Height (cm)</span>
          <input
            v-model.number="heightCm"
            type="number"
            min="120"
            max="220"
            required
            class="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-neonPurple/60"
          />
        </label>

        <label class="block">
          <span class="text-sm font-semibold text-white/80">Weight (kg)</span>
          <input
            v-model.number="weightKg"
            type="number"
            min="35"
            max="200"
            required
            class="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-neonPurple/60"
          />
        </label>

        <label class="block">
          <span class="text-sm font-semibold text-white/80">Goal</span>
          <select
            v-model="goal"
            class="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-neonPurple/60"
          >
            <option value="cut">Cut (leaner)</option>
            <option value="maintain">Maintain</option>
            <option value="bulk">Bulk (stronger)</option>
          </select>
        </label>

        <label class="block">
          <span class="text-sm font-semibold text-white/80">Fitness level</span>
          <select
            v-model="fitnessLevel"
            class="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-neonPurple/60"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>

        <div class="md:col-span-2 flex flex-wrap gap-3">
          <button
            type="button"
            class="rounded-xl bg-white/5 px-5 py-2.5 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/10"
            @click="router.push('/dashboard')"
          >
            Skip
          </button>
          <button
            type="submit"
            class="rounded-xl bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
          >
            Save & continue
          </button>
        </div>
      </form>
    </NeonCard>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import NeonCard from '@/components/NeonCard.vue'
import { useProfileStore } from '@/stores/profile'
import { useCharactersStore } from '@/stores/characters'

const router = useRouter()
const profile = useProfileStore()
const characters = useCharactersStore()

const heightCm = ref(profile.heightCm)
const weightKg = ref(profile.weightKg)
const goal = ref(profile.goal)
const fitnessLevel = ref(profile.fitnessLevel)

onMounted(() => {
  profile.fetchProfile()
})

const payload = computed(() => ({
  heightCm: heightCm.value,
  weightKg: weightKg.value,
  goal: goal.value,
  fitnessLevel: fitnessLevel.value,
  selectedCharacterId: characters.selectedCharacterId || profile.selectedCharacterId,
}))

async function onSubmit() {
  await profile.saveProfile(payload.value)
  router.push('/dashboard')
}
</script>

