<template>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }} - {{ user.id }}</li>
  </ul>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup: () => ({
    store$: useStore(),
  }),
  computed: {
    users(){
      return this.store$.getters["users/getItems"];
    }
  },
};
</script>
