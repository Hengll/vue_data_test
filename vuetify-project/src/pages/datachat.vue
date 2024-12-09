<template>
  <v-container>
    <v-data-table :items="useAppStore.data" />
  </v-container>
</template>
<script setup>
import { useAppStore } from '@/stores/app'
</script>
