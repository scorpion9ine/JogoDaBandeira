<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Que país é esse?</h1>
  </header>
  <body>
    <h2> COMO JOGAR? </h2>
    <p>Selecione a bandeira que condiz com o nome do </p>
  </body>
  <main>
    <RouterLink to="flag-app">Iniciar</RouterLink>
  </main>
</template>

<style>
header{
  padding: 20px;
  text-align: center;
  background-color: #4CAF50;
  font-size: 4rem;
}
</style>
