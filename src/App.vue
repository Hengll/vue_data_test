<template>
  <v-app>
    <v-app-bar elevation="1">
      <v-container fluid class="d-flex align-center">
        <v-app-bar-title>這個是標題</v-app-bar-title>
        <v-btn>這可能是登入</v-btn>
        <v-btn>這可能是註冊</v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer class="text-center" permanent width="160">
      <v-list>
        <v-list-item to="/" title="首頁" />
        <v-list-item to="/dataUpload" title="資料上傳" />
        <v-list-item to="/dataView" title="資料預覽" />
        <v-list-group value="資料圖表">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="資料圖表" to="/dataReport" />
          </template>

          <v-list-item title="圖1" />
          <v-list-item title="圖2" />
          <v-list-item title="圖3" />
        </v-list-group>
        <v-list-item to="/dataCanvas" title="圖表畫布" />
        <v-list-item>
          <h1>{{ time }}</h1>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const time = ref(0)

setInterval(() => {
  time.value++
}, 500)
</script>
