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
  <div class="cronometro">
    <h2>Cronômetro: {{ appStore.tempo }}</h2>
  </div>
  <div class="bandeiras">
    <div class="nomePais">
      <h2>{{ appStore.BC.name }}</h2>
    </div>
    <div class="bandeirasimg">
      <ul>
        <li v-for="bandeiras in appStore.bandeiraSorteada" :key="bandeiras.name">
          <img
            :src="'bandeiras/' + bandeiras.image"
            :alt="bandeiras.name"
            @click="verAcerto(bandeiras.id)"
          />
        </li>
      </ul>
    </div>
  </div>
  <div class="pontuacao">
    <h2>Pontuação: {{ appStore.pontos }}</h2>
  </div>
</template>

<style>
.cronometro {
  width: 100%;
  height: 100%;
  background-color: #000000;
  border: 5px solid #000000;
  color: white;
  text-align: start;
  margin-bottom: 30px;

h2 {
  padding: 5px;
  font-size: 2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: bold;
}
}
.bandeiras{

  .nomePais {
    font-size: 3rem;
    width: 80%;
    height: 90px;
    background-color: #000000;
    border: 5px solid #000000;
    color: white;
    text-align: center;
    margin-bottom: 30px;
    border-radius: 20px;
    justify-content: center;
    margin: 30px auto;
    padding: 10px;
  }
div.bandeirasimg ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 5px solid #000000;
  margin: 10px;
  background-color: black;
  border-radius: 20px;
}
div.bandeirasimg ul li{
  width: 30%;
}
}
.pontuacao{
  margin-top: 200px;
  width: 80%;
  height: 60px;
  background-color: #000000;
  border: 5px solid #000000;
  color: white;
  text-align: start;
  margin: 30px auto;
  border-radius: 20px;
h2 {
  padding: 5px;
  font-size: 2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: bold;
}
}
body{
 background-image: url('png/pngbandeira.png') ;


}
</style>
