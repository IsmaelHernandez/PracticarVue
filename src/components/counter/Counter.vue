<template>
  <div class="containerCounter">
    <div class="itemCounter">
      <h1 class="title">Contador</h1>
      <p class="title">Valor del contador: {{ counter }}</p>
      <div class="itemBotom">
        <button class="" @click="increment">Incrementar</button>
        <button class="" @click="decrement">Decrementar</button>
        <button class="" @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import "@/assets/css/counter/counter.css";

export default {
  name: "Counter ",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  },
};
</script>

<style>
/* Estilos para tu componente */
</style>
