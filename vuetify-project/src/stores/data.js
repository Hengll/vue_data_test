// Utilities
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => {
    return {
      dataArray: [],
      dataSelect: []
    }
  },
  actions: {
    addData(newdata,newdataTile) {
      this.dataArray.push({
        data: newdata,
        dataTitle:newdataTile
      })
    },
    selectData(select) {
      this.dataArray.forEach(val => {
        if (val.dataTitle === select) {
          this.dataSelect = val
        }
      })
    }
  }
})
