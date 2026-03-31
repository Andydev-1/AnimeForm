<template>
  <div class="space-y-6">
    <NeonCard>
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="space-y-2">
          <div class="anime-font text-2xl font-black text-white">Your dashboard</div>
          <div class="text-sm text-white/70">
            Character: <span class="text-neonCyan font-semibold">{{ selectedCharacter?.name || 'Not selected' }}</span>
          </div>
          <div class="text-xs text-white/50">Streak rewards unlock faster ranks.</div>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <div class="min-w-[260px]">
            <XPBar :xp="progressStore.xp" :rank="progressStore.rank" />
          </div>
          <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <div class="text-xs font-semibold text-white/60">Current streak</div>
            <div class="mt-1 anime-font text-3xl font-black text-white">{{ progressStore.streak }} days</div>
          </div>
        </div>
      </div>
    </NeonCard>

    <NeonCard>
      <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <div class="anime-font text-xl font-black text-white">Daily mission</div>
          <div class="mt-1 text-sm text-white/70">{{ progressStore.dailyMission.title }}</div>
          <div class="mt-2 text-sm text-white/60">{{ progressStore.dailyMission.detail }}</div>
        </div>
        <div class="flex flex-wrap gap-3">
          <NeonButton label="Start workout" to="/workout" />
          <NeonButton label="View progress" to="/progress" />
        </div>
      </div>
    </NeonCard>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import NeonCard from '@/components/NeonCard.vue'
import NeonButton from '@/components/NeonButton.vue'
import XPBar from '@/components/XPBar.vue'
import { useCharactersStore } from '@/stores/characters'
import { useProgressStore } from '@/stores/progress'

const charactersStore = useCharactersStore()
const progressStore = useProgressStore()
const selectedCharacter = computed(() => charactersStore.selectedCharacter)

onMounted(async () => {
  if (!charactersStore.characters.length) await charactersStore.fetchCharacters()
  await progressStore.fetchProgress()
  await progressStore.fetchDailyMission()
})
</script>

