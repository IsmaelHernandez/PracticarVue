<template>
    <div>
      <h2>Consumo de API de Rick and Morty con Axios en Vue.js 3</h2>
      <div>
        <button @click="consumeData">Cargar Datos</button>
        <ul v-if="nombres.length > 0">
          <li v-for="nombre in nombres" :key="character.id">{{ character.name }}</li>
        </ul>
      </div>
      <div>
        <h1>{{ msj }}</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'ApiExample',
    setup() {
      // Estado para almacenar los datos de la API
      const nombres = ref([]);
      // variable jaja
      const msj = "Texto prueba para renderizar";
      // Función para cargar los datos desde la API
      const consumeData = async () => {
        try {
          const response = await axios.get("https://rickandmortyapi.com/api/character");
          nombres.value = console.log(response.data.results);
        } catch (error) {
          console.log('Error al cargar los datos:', error);
        } 
      };
      
      return {
        nombres,
        consumeData,
        msj,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente */
  </style>
  