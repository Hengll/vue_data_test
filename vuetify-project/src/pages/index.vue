<template>
  <v-container>
    <v-file-input
      accept=".json"
      label="File input"
      @change="readJson($event)"
    />
    <v-text-field />
    <v-btn
      value="data"
      @click="checkData"
    >
      確認資料
    </v-btn>
    <v-btn
      v-if="dataOK"
      @click="$router.push('/dataView')"
    >
      開始
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/data'

const data = []
const dataOK = ref(false)

const readJson = (event) => {
  const fileReader = new FileReader()
  const [file] = event.target.files
  fileReader.readAsText(file)
  data.splice(0)
  fileReader.onload = function() {
    data.push(JSON.parse(fileReader.result))
  }

  fileReader.onerror = function() {
    console.log(fileReader.error)
  }
}

const checkData = () => {
  if (data.length !== 0) {
    console.log(data[0])
    useDataStore().data = data[0]
    dataOK.value = true
  }
  else {
    alert('請上傳資料')
  }
}
</script>

<route lang="json">
  {
    "meta": {
      "title": "資料上傳"
    }
  }
</route>
