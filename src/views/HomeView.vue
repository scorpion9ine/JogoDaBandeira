<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Que país é esse?</h1>
  </header>
  <main>
    <div class="gamebox">
      <h2>COMO JOGAR?</h2>
      <p>Selecione a bandeira que condiz com o nome do país!</p>
    </div>
    <div class="botao">
      <RouterLink to="flag-app">INICIAR</RouterLink>
    </div>
  </main>
</template>

<style>
header {
  margin: 50px;
  padding: 0px 50px 0px 50px;
  text-align: center;
  font-size: 3.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background: #a39a9a;
}

.gamebox {
  width: 300px;
  height: 300px;
  background-color: #000000;
  border: 5px solid #000000;
  margin: 50px auto;
  color: white;
  border-radius: 30px;

  h2 {
    padding: 10px 20px 10px 20px;
    font-size: 2rem;
    margin-top: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: bold;
  }

  p {
    padding: 0px 75px 0px 75px;
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
}
main {
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 3rem;
  margin-top: 30%;

.botao a{
  background-color: #000000;
  border: 5px solid #000000;
  margin: 50px auto;
  color: rgb(255, 255, 255);
  border-radius: 30px;
  padding: 17px 0px;
  background-color: rgb(0, 0, 0);
  display:inline-block;
  width: 80%;
}
.botao{
  margin-top: 150px;
}
}

</style>
