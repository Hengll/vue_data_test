<template>
  <h1 class="text-center">圖表</h1>
  <BarChart :chart-data="dataForBarChart"> Chart couldn't be loaded. </BarChart>
</template>

<script setup>
import { computed } from 'vue'
import { useDataStore } from '@/stores/data'
const datas = useDataStore()

const dataForBarChart = computed(() => {
  return {
    labels: datas.dataSelect.data.map((row) => row.district),
    datasets: [
      {
        label: '圖例',
        data: datas.dataSelect.data.map((row) => row.death),
      },
    ],
  }
})

// {
//         labels: [],
//         datasets: [{
//           label: '圖例',
//           data: []
//         }]
//       }
</script>

<route lang="json">
{
  "meta": {
    "title": "資料圖表"
  }
}
</route>
