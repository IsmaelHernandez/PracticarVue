<template>
  <div class="container">
    <label for="name">Nombre:</label>
    <input type="text" id="name" v-model="formData.name" />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="formData.email" />

    <button @click="registerForm()">Enviar</button>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup: () => ({
    store$: useStore(),
  }),
  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    registerForm() {
      this.store$.dispatch("users/addUsers", {...this.formData , id:  Date.now()});
      this.formData.name = ""
      this.formData.email = ""
    },
  },
};
</script>
