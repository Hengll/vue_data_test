<template>
  <h1 class="text-center">圖表</h1>
  <!-- <BarChart :chart-data="dataForBarChart"> Chart couldn't be loaded. </BarChart> -->
  <v-container ref="content" fluid> </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useDataStore } from '@/stores/data'
const datas = useDataStore()
console.log(datas)

// const dataForBarChart = computed(() => {
//   return {
//     labels: datas.dataSelect.data.map((row) => row.district),
//     datasets: [
//       {
//         label: 'death',
//         data: datas.dataSelect.data.map((row) => row.death),
//       },
//     ],
//   }
// })
</script>

<route lang="json">
{
  "meta": {
    "title": "資料圖表"
  }
}
</route>
