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
      <!-- 加入 v-treeview-item--activatable-group-activator class 用來防止group下的opcity:0 -->
      <v-list
        open-strategy="list"
        active-class="v-treeview-item--activatable-group-activator"
        color="success"
      >
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
              @click="$router.push('/dataReport')"
            />
          </template>

          <v-list-item title="圖1" />
          <v-list-item title="圖2" />
          <v-list-item title="圖3" />
        </v-list-group>
        <v-list-item to="/dataCanvas" title="圖表畫布" />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup></script>

<style scoped lang="scss">
:deep(.v-list-item__spacer) {
  display: none;
}
</style>
