import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const bandeiraSorteada = ref([])
  const qtBandeiras = 9 // Quantidade total de bandeiras
  const doubleCount = computed(() => count.value * 2)
  const BC = ref(null) //Bandeira Correta

  function sortearBandeiras(bandeiras) {
    while(bandeiraSorteada.value.length < qtBandeiras) {
      const elementoSorteio = Math.floor(Math.random() * 50);
      const posi = bandeiraSorteada.value.findIndex((item) => item.id === bandeiras[elementoSorteio].id)
      if(posi === -1) {
        console.log(elementoSorteio)
        bandeiraSorteada.value.push({... bandeiras[elementoSorteio]}) /*o array 2 não é um elemento variavel e sim um destino*/
      }
      console.log(bandeiraSorteada.value)
    }
    const correta = Math.floor(Math.random() * qtBandeiras)
    BC.value = bandeiraSorteada.value[correta];
    console.log('Bandeira Correta: '+correta)
  }
  return {bandeiraSorteada, sortearBandeiras, BC}
});
