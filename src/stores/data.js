// Utilities
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => {
    return {
      dataArray: [],
      dataSelect: {
        data: [],
        dataTitle: '',
        dataAttribute: [],
        tables: [],
      },
    }
  },
  actions: {
    addData(newdata, newdataTile) {
      const dataAttribute = []
      Object.keys(newdata[0]).forEach((val) => {
        dataAttribute.push(val)
      })

      this.dataArray.push({
        data: newdata,
        dataTitle: newdataTile,
        dataAttribute: dataAttribute,
        tables: [],
      })
    },
    selectData(select) {
      this.dataArray.forEach((val) => {
        if (val.dataTitle === select) {
          this.dataSelect = val
        }
      })
    },
    addTable(componentName, tableName, selectAttribute) {
      this.dataSelect.tables.push({
        componentName: componentName,
        tableName: tableName,
        selectAttribute: selectAttribute,
      })
    },
  },
  persist: {
    key: 'dataSelect',
    pick: ['dataSelect']
  }
})
