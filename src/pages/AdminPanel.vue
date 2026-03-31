<template>
  <div class="space-y-6">
    <NeonCard>
      <div class="anime-font text-2xl font-black text-white">Admin Panel</div>
      <div class="mt-2 text-sm text-white/70">Manage characters and workout programs (MVP UI; endpoints coming next).</div>
    </NeonCard>

    <NeonCard>
      <div class="flex items-center justify-between gap-4">
        <div>
          <div class="text-sm font-semibold text-white/80">Characters</div>
          <div class="text-xs text-white/60">Edit/add will call admin endpoints in the backend.</div>
        </div>
        <button
          type="button"
          class="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
          @click="addSample"
        >
          Add sample
        </button>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <CharacterCard
          v-for="c in charactersStore.characters"
          :key="c.id"
          :character="c"
          :selected="c.id === charactersStore.selectedCharacterId"
          @select="charactersStore.selectCharacter"
        />
      </div>
    </NeonCard>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'
import NeonCard from '@/components/NeonCard.vue'
import { useCharactersStore } from '@/stores/characters'

const charactersStore = useCharactersStore()

onMounted(() => {
  charactersStore.fetchCharacters()
})

function addSample() {
  charactersStore.characters.unshift({
    id: `c_${Date.now()}`,
    name: 'New Archetype',
    bodyType: 'Athletic',
    difficulty: 'Beginner',
    trainingStyle: 'Neon Basics',
    xpModifier: 1.05,
  })
}
</script>

