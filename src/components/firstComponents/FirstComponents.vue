<template>
    <div>
      <h2>Consumo de API con Axios en Vue.js 3</h2>
      <div>
        <ul>
          <li v-for="item in data" :key="item.id">{{ item.title }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  
  <script>

  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'ApiExample',
    data() {
      // Estado para almacenar los datos de la API
      const data = ref([]);
    
      // Función para cargar los datos desde la API
      const consumeData = async () => {
        const URL = "https://restcountries.com/v3.1/lang/spanish";
            axios.get(URL)
            .then((res) => URL.data)
            .catch((err) => console.log(err.data))
        
      };

      console.log(data)
  
      return {
        data,
        consumeData,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente */
  </style>
  