<template>
  <v-app>
    <v-app-bar elevation="1">
      <v-container
        fluid
        class="d-flex align-center"
      >
        <v-app-bar-title>這個是標題</v-app-bar-title>
        <v-btn>這可能是登入</v-btn>
        <v-btn>這可能是註冊</v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      class="text-center"
      permanent
      width="180"
    >
      <v-list-item
        to="/dataViews"
        title="資料預覽"
      />
      <v-list-item
        to="/dataReport"
        title="資料報表"
      />
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
</script>
