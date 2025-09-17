<script setup>
import { useFlagStore } from '@/stores/flag'
import { useAppStore } from '@/stores/app';
const flagStore = useFlagStore();
const appStore = useAppStore();
appStore.sortearBandeiras(flagStore.flags);

</script>

<template>
  <h2>{{ appStore.BC }}</h2>
<ul>
  <li v-for="bandeiras in appStore.bandeiraSorteada" :key="bandeiras.name">
    <img :src="'bandeiras/'+bandeiras.image" :alt="bandeiras.name" width="100" height="60"/>
    {{ bandeiras.name }}
  </li>
</ul>
</template>

<style>

</style>
