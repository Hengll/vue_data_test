<template>
  <v-app>
    <v-app-bar elevation="1">
      <v-container fluid class="d-flex align-center">
        <v-btn icon="mdi-menu" variant="text" class="me-2" @click.stop="rail = !rail"></v-btn>
        <v-app-bar-title>標題</v-app-bar-title>
        <v-btn>登入</v-btn>
        <v-btn>註冊</v-btn>
        <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      mobile-breakpoint="md"
      class="text-center"
      permanent
      width="200"
      :rail="rail"
      rail-width="65"
    >
      <!-- 加入 v-treeview-item--activatable-group-activator class 用來防止group下的opcity:0 -->
      <v-list
        open-strategy="list"
        active-class="v-treeview-item--activatable-group-activator"
        color="success"
      >
        <v-list-item prepend-icon="mdi-home" to="/" title="首頁">
          <template #append>
            <div class="icon-placeholder"></div>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-file-upload-outline" to="/dataUpload" title="資料上傳">
          <template #append>
            <div class="icon-placeholder"></div>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-database-eye-outline" to="/dataView" title="資料預覽">
          <template #append>
            <div class="icon-placeholder"></div>
          </template>
        </v-list-item>
        <v-list-group fluid>
          <template #activator="{ props }">
            <!-- to="/dataReport"  -->
            <v-list-item
              prepend-icon="mdi-chart-areaspline"
              class="text-center user-select-none"
              v-bind="props"
              title="資料圖表"
              @click="$router.push('/dataReport')"
            ></v-list-item>
          </template>
          <v-divider></v-divider>
          <!-- https://play.vuetifyjs.com/#eNqtVcGO0zAQ/ZUhl+5Km2YlblFbQAgOCCQkJC6Ug2u7jYtrW7aTXVT13xk7SZu4YQGxPTTO85vxzPjN5Nsxc5YWb4yZNzXPymzh+cFI4vlqrQAWTDRAJXFuuc48f/Q55cpzu87iNhKa/MBVDfjQjEtkhdd1BiWV2vFcq5xqtFBoKQX9gYQtkY4jQ2pKvNAKIa7Y2SP67ENAr05qXxLqRUO8tkg9grHaODgNDGIYG6+AahlJQjGx03gGwrhGJBqhCXwK0RIHn7XRDbewKKLp5fBiUIAz2OSUWAYHofIHwXyFHl/e36chSOH8ADljuUCfQxwwCW4w65xgXiSEXHlvXFkUlKlwE15sf+7dnOpDIQ5kx12x15Wa781unY09uXrjhZccfbzXtWKYk97C19ZFSu6ZH9AZfOQC2WPKKPypqzAh7ITV1z9FIaig1c6WNPAKZlFClrMZlDCbpdGFn0C5BBUxkVecWD/FaYgVRPlOklOM1xexNbCEF/i4pq3Su59QwBAeXObw3jt8IJdYD+ycUN54SL9OKE/qJY0KL+BBeFqlWQw7zzmUynWifVuY2ho5sS/JJjp4p8hGcuj8YLukxAqzyBn3REg33otptgE+WbXny7YSyk+E+I+5/sbL/yf6J3mEeZKHwaaVSzXgDKGdcrrlVeHCtEvb4KL6OJKX0E3aFbwlinJ5NesmJqexOG4szo2/9z6uzxfS8LQu4zMDMpl9v9F/WvA1HNV+iArsIVwl43nhqBWmbSL+aLT1wPiW1NLDsfXCcL6WcHMLyxXcdBhg7E0J3tb8rkfCSWWb0wCLjZDCUTMj89NtXJxCfOeIstOdqqWMf99/AXL8H6E= -->
          <v-menu
            v-for="val in menu"
            :key="val.componentName"
            v-model="val.isOpen"
            :close-on-content-click="false"
            location="end"
          >
            <template #activator="{ props }">
              <v-list-item
                append-icon="mdi-plus"
                :prepend-icon="val.icon"
                class="user-select-none"
                :title="val.componentName"
                v-bind="props"
              ></v-list-item>
            </template>

            <v-card min-width="300">
              <v-list>
                <v-list-item :title="'插入' + val.componentName"></v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list>
                <v-list-item>
                  <v-text-field v-model="val.titleInput" label="圖表名稱"></v-text-field>
                </v-list-item>
                <v-list-item>
                  <v-select
                    v-model="val.attributeSelect[0]"
                    label="x-變量"
                    :items="datas.dataSelect.dataAttribute"
                  ></v-select>
                </v-list-item>
                <v-list-item>
                  <v-select
                    v-model="val.attributeSelect[1]"
                    label="y-變量"
                    :items="datas.dataSelect.dataAttribute"
                  ></v-select>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="text" @click="val.isOpen = false">取消</v-btn>
                <v-btn color="primary" variant="text" @click="insertTable(val)">新增</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-divider></v-divider>
        </v-list-group>
        <v-list-item prepend-icon="mdi-chart-box-outline" to="/dataCanvas" title="圖表畫布">
          <template #append>
            <div class="icon-placeholder"></div>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { ref, reactive } from 'vue'
import { useDataStore } from '@/stores/data'

const theme = useTheme()
const datas = useDataStore()

const rail = ref(false)
const menu = reactive([
  {
    isOpen: false,
    componentName: '長條圖',
    icon: 'mdi-chart-bar',
    titleInput: '',
    attributeSelect: ['', ''],
  },
  {
    isOpen: false,
    componentName: '折線圖',
    icon: 'mdi-chart-line',
    titleInput: '',
    attributeSelect: ['', ''],
  },
])

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const insertTable = (val) => {
  const newAttributeSelect = [].concat(val.attributeSelect)
  datas.addTable(val.componentName, val.titleInput, newAttributeSelect)
  val.isOpen = false
}
</script>

<style scoped lang="scss">
:deep(.v-list-item__spacer) {
  display: none;
}

.user-select-none {
  user-select: none;
}

.icon-placeholder {
  width: 24px;
  height: 24px;
}
</style>
