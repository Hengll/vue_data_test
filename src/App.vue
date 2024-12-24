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
          <!-- https://play.vuetifyjs.com/#eNqtVcGO0zAQ/ZUhl+5Km2YlblFbQAgOCCQkJC6Ug2u7jYtrW7aTXVT13xk7SZu4YQGxPTTO85vxzPjN5Nsxc5YWb4yZNzXPymzh+cFI4vlqrQAWTDRAJXFuuc48f/Q55cpzu87iNhKa/MBVDfjQjEtkhdd1BiWV2vFcq5xqtFBoKQX9gYQtkY4jQ2pKvNAKIa7Y2SP67ENAr05qXxLqRUO8tkg9grHaODgNDGIYG6+AahlJQjGx03gGwrhGJBqhCXwK0RIHn7XRDbewKKLp5fBiUIAz2OSUWAYHofIHwXyFHl/e36chSOH8ADljuUCfQxwwCW4w65xgXiSEXHlvXFkUlKlwE15sf+7dnOpDIQ5kx12x15Wa781unY09uXrjhZccfbzXtWKYk97C19ZFSu6ZH9AZfOQC2WPKKPypqzAh7ITV1z9FIaig1c6WNPAKZlFClrMZlDCbpdGFn0C5BBUxkVecWD/FaYgVRPlOklOM1xexNbCEF/i4pq3Su59QwBAeXObw3jt8IJdYD+ycUN54SL9OKE/qJY0KL+BBeFqlWQw7zzmUynWifVuY2ho5sS/JJjp4p8hGcuj8YLukxAqzyBn3REg33otptgE+WbXny7YSyk+E+I+5/sbL/yf6J3mEeZKHwaaVSzXgDKGdcrrlVeHCtEvb4KL6OJKX0E3aFbwlinJ5NesmJqexOG4szo2/9z6uzxfS8LQu4zMDMpl9v9F/WvA1HNV+iArsIVwl43nhqBWmbSL+aLT1wPiW1NLDsfXCcL6WcHMLyxXcdBhg7E0J3tb8rkfCSWWb0wCLjZDCUTMj89NtXJxCfOeIstOdqqWMf99/AXL8H6E= -->
          <v-list-item
            prepend-icon="mdi-plus"
            class="user-select-none"
            title="長條圖"
            @click="console.log('1')"
          />
          <v-list-item
            prepend-icon="mdi-plus"
            class="user-select-none"
            title="圖2"
            @click="console.log('2')"
          />
          <v-list-item
            prepend-icon="mdi-plus"
            class="user-select-none"
            title="圖3"
            @click="console.log('3')"
          />
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

.user-select-none {
  user-select: none;
}
</style>
