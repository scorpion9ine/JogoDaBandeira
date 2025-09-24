<script setup>
import { useFlagStore } from '@/stores/flag'
import { useAppStore } from '@/stores/app'
const flagStore = useFlagStore()
const appStore = useAppStore()
const acertou = new Audio('audio/win.wav')
const errou = new Audio('audio/falha.wav')
appStore.sortearBandeiras(flagStore.flags)
function verAcerto(id) {
  console.log(id, appStore.BC.id)
  if (appStore.BC.id == id) {
    appStore.bandeiraSorteada = []
    console.log('id')
    appStore.sortearBandeiras(flagStore.flags)
    acertou.play()
  } else {
    errou.play()
  }
}
</script>

<template>
  <h2>{{ appStore.BC.name }}</h2>
  <ul>
    <li v-for="bandeiras in appStore.bandeiraSorteada" :key="bandeiras.name">
      <img
        :src="'bandeiras/' + bandeiras.image"
        :alt="bandeiras.name"
        @click="verAcerto(bandeiras.id)"
      />
      {{ bandeiras.name }}
    </li>
  </ul>
</template>

<style></style>
