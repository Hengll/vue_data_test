<template>
  <v-container fluid>
    <v-data-table
      :items="datas.data"
      height="600"
      fixed-header
    />
  </v-container>
</template>
<script setup>
import { useAppStore } from '@/stores/app'

const datas = useAppStore()
</script>
