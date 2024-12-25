<template>
  <v-container>
    <v-row>
      <v-col class="border" cols="12">
        <h1 class="text-center">資料上傳</h1>
        <v-file-input accept=".json" label="資料上傳" @change="readJson($event)"></v-file-input>
        <v-text-field v-model="input" prepend-icon="mdi-rename" label="資料名稱"></v-text-field>
        <v-btn value="data" @click="checkData"> 確認上傳 </v-btn>
      </v-col>
      <v-col class="border mt-5" cols="12">
        <h1 class="text-center">資料選擇</h1>
        <v-select v-model="select" label="Select" :items="dataNames"></v-select>
        <v-btn to="/dataView" @click="datas.selectData(select)"> 開始 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useDataStore } from '@/stores/data'

const datas = useDataStore()
const data = []
const input = ref('dataname01')
const select = ref('')

const readJson = (event) => {
  const fileReader = new FileReader()
  const [file] = event.target.files
  fileReader.readAsText(file)
  data.splice(0)
  fileReader.onload = function () {
    data.push(JSON.parse(fileReader.result))
  }

  fileReader.onerror = function () {
    console.log(fileReader.error)
  }
}

const checkData = () => {
  if (data.length !== 0) {
    // console.log(data[0])
    datas.addData(data[0], input.value)
    alert('上傳資料成功')
  } else {
    alert('請上傳資料')
  }
}

const dataNames = computed(() => {
  return datas.dataArray.map((row) => row.dataTitle)
})
</script>

<route lang="json">
{
  "meta": {
    "title": "資料上傳"
  }
}
</route>
