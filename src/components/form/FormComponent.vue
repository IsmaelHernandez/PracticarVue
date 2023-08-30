<template>
  <div class="containerForm">
    <div class="itemForm">
      <h1>Formulario de Usuario</h1>
      <form>
        <label for="username">Nombre de Usuario:</label>
        <input id="username" v-model="userName" />
      </form>
      <p class="danger">{{ userNameMessage }}</p>
    </div>
  </div>
</template>

<script>
import FormComponent from "./FormComponent.vue";
import "@/assets/css/form/form.css";
export default {
  name: "FormComponent ",
  data() {
    return {
      userName: "",
      userNameMessage: "",
    };
  },
  watch: {
    username(newUsername) {
      this.validateUsername(newUsername);
    },
  },
  methods: {
    validateUsername(username) {
      if (username.length < 6) {
        this.userNameMessage = "El nombre de usuario debe tener al menos 6 letras.";
      } else {
        this.userNameMessage = "";
      }
    },
  },
};
</script>
