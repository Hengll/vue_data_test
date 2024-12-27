<template>
  <h1 class="text-center">圖表</h1>
  <v-btn @click="console.log(datas.dataSelect.tables)">test tables</v-btn>
  <!-- <BarChart :chart-data="dataForBarChart"> Chart couldn't be loaded. </BarChart> -->
  <v-container ref="content" fluid>
    <template v-for="table in datas.dataSelect.tables" :key="table">
      <BarChart v-if="table.componentName === '長條圖'" :chart-data="dataForBarChart(table)">
        Chart couldn't be loaded.
      </BarChart>
    </template>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/data'
const datas = useDataStore()
const content = ref(null)

const dataForBarChart = (table) => {
  return {
    labels: datas.dataSelect.data.map((row) => row[table.selectAttribute[0]]),
    datasets: [
      {
        label: table.selectAttribute[1],
        data: datas.dataSelect.data.map((row) => row[table.selectAttribute[1]]),
      },
    ],
  }
}
</script>

<route lang="json">
{
  "meta": {
    "title": "資料圖表"
  }
}
</route>
