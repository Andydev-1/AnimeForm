import { defineStore } from 'pinia'
import { api } from '@/api/client'

const SELECTED_KEY = 'animafrom_selected_character_id'

const sampleCharacters = [
  { id: 'c1', name: 'Kitsune', bodyType: 'Athletic', difficulty: 'Beginner', trainingStyle: 'Agility Spirit', xpModifier: 1.1 },
  { id: 'c2', name: 'Valkyrie', bodyType: 'Muscular', difficulty: 'Intermediate', trainingStyle: 'Steel Endurance', xpModifier: 1.2 },
  { id: 'c3', name: 'Shinobi', bodyType: 'Lean', difficulty: 'Intermediate', trainingStyle: 'Shadow Mobility', xpModifier: 1.15 },
  { id: 'c4', name: 'Dragonkin', bodyType: 'Bulky', difficulty: 'Advanced', trainingStyle: 'Flame Strength', xpModifier: 1.25 },
  { id: 'c5', name: 'Aether Mage', bodyType: 'Athletic', difficulty: 'Beginner', trainingStyle: 'Breath Endurance', xpModifier: 1.05 },
  { id: 'c6', name: 'Ranger', bodyType: 'Lean', difficulty: 'Intermediate', trainingStyle: 'Trail Agility', xpModifier: 1.12 },
  { id: 'c7', name: 'Titanheart', bodyType: 'Muscular', difficulty: 'Advanced', trainingStyle: 'Core Power', xpModifier: 1.3 },
  { id: 'c8', name: 'Nekomancer', bodyType: 'Athletic', difficulty: 'Beginner', trainingStyle: 'Quick Recovery', xpModifier: 1.08 },
  { id: 'c9', name: 'Cyber Ronin', bodyType: 'Lean', difficulty: 'Intermediate', trainingStyle: 'Neon Footwork', xpModifier: 1.18 },
  { id: 'c10', name: 'Ocean Samurai', bodyType: 'Muscular', difficulty: 'Advanced', trainingStyle: 'Wave Strength', xpModifier: 1.22 },
]

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [],
    selectedCharacterId: localStorage.getItem(SELECTED_KEY) || null,
    status: 'idle',
    error: null,
  }),
  getters: {
    selectedCharacter: (s) => s.characters.find((c) => c.id === s.selectedCharacterId) || null,
  },
  actions: {
    async fetchCharacters() {
      this.status = 'loading'
      this.error = null
      try {
        const res = await api.get('/api/characters')
        this.characters = res.data?.characters || []
        if (!this.characters.length) this.characters = sampleCharacters
        this.status = 'success'
      } catch (err) {
        this.characters = sampleCharacters
        this.status = 'success'
        this.error = err
      }
    },
    selectCharacter(id) {
      this.selectedCharacterId = id
      localStorage.setItem(SELECTED_KEY, id)
    },
  },
})

