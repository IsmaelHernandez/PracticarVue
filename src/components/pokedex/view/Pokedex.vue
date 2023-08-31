<template>
  <div class="">
    <div class="">
      <h1>Lista de datos prueba</h1>
      <div class="" v-for="(item, index) in users" :key="index">
        <!-- Mediante props mando al componente hijo -->
        <PokemonList
          @custom-event="handleDetailUser"
          :id="index"
          :username="item.username ?? ''"
          :phone="item.phone ?? ''"
          :website="item.website ?? ''"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import PokemonList from "../PokemonList.vue";
import axios from 'axios';

export default {
  components: {
    PokemonList,
  },
  data() {
    return {
      users: [],
    };
  },
  // para iniciar la obtención de datos de los usuarios justo después de que el componente se haya montado en el DOM.
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data; // Asignar a 'users', no a 'user'
          this.isLoading = false;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },
  },
};
</script>
