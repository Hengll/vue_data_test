<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData"></Bar>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
// defineProps 自動import
// import { defineProps } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

defineProps({
  chartData: {
    type: Object,
    required: true,
    // default: () => {
    //   return {
    //     labels: [],
    //     datasets: [{
    //       label: '圖例',
    //       data: []
    //     }]
    //   }
    // }
  },
})

const chartOptions = {
  responsive: true,
}
</script>
