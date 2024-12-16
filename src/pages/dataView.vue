<template>
  <v-container fluid>
    <h1 class=" text-center">
      {{ datas.dataSelect.dataTitle }}
    </h1>
    <v-data-table
      :items="datas.dataSelect.data"
      height="600"
      fixed-header
    />
  </v-container>
</template>
<script setup>
import { useDataStore } from '@/stores/data'

const datas = useDataStore()
</script>

<route lang="json">
  {
    "meta": {
      "title": "資料預覽"
    }
  }
</route>
