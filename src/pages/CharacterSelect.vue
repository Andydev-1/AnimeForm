<template>
  <div>
    <NeonCard>
      <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="anime-font text-2xl font-black text-white">Select your archetype</div>
          <div class="mt-2 text-sm text-white/70">
            8–12 original characters. Each one has a structured training style.
          </div>
        </div>

        <div class="flex items-center gap-3">
          <span v-if="charactersStore.status === 'loading'" class="text-sm text-white/60">Loading...</span>
          <button
            type="button"
            class="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/10"
            @click="router.push('/dashboard')"
          >
            Skip
          </button>
          <button
            type="button"
            class="rounded-xl bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
            :disabled="!charactersStore.selectedCharacterId"
            @click="goNext"
          >
            Continue
          </button>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <CharacterCard
          v-for="c in charactersStore.characters"
          :key="c.id"
          :character="c"
          :selected="c.id === charactersStore.selectedCharacterId"
          @select="charactersStore.selectCharacter"
        />
      </div>

      <div class="mt-6 text-xs text-white/50">
        Note: these are original archetypes inspired by anime training aesthetics (no copyrighted characters).
      </div>
    </NeonCard>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CharacterCard from '@/components/CharacterCard.vue'
import NeonCard from '@/components/NeonCard.vue'
import { useCharactersStore } from '@/stores/characters'

const router = useRouter()
const charactersStore = useCharactersStore()

onMounted(() => {
  charactersStore.fetchCharacters()
})

function goNext() {
  router.push('/profile')
}
</script>

