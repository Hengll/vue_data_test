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
      <v-list open-strategy="list">
        <v-list-item to="/" title="首頁" />
        <v-list-item to="/dataUpload" title="資料上傳" />
        <v-list-item to="/dataView" title="資料預覽" />
        <v-list-group fluid>
          <template #activator="{ props }">
            <!-- to="/dataReport"  -->
            <v-list-item
              class="text-center"
              v-bind="props"
              title="資料圖表"
              @click="todataReport"
            />
          </template>

          <v-list-item title="圖1" />
          <v-list-item title="圖2" />
          <v-list-item title="圖3" />
        </v-list-group>
        <v-list-item to="/dataCanvas" title="圖表畫布" />
        <div id="box1" class="box1">box1</div>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
// import { ref } from 'vue'
import router from './router'

const todataReport = () => {
  router.push('/dataReport')
}
</script>

<style lang="scss">
.v-list-item__spacer {
  display: none;
}

#box1 {
  color: red;
}

.box1 {
  color: yellow;
}
</style>
