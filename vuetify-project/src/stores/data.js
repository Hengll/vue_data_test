// Utilities
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => {
    return {
      data: [],
      dataTitle:'dataname'
    }
  },
})
