<template>
  <div class="containerCounter">
    <div class="itemCounter">
      <h1 class="title">Contador</h1>
      <p :style="{ color: counterColor }">Contador: {{ counter }}</p>
      <div class="itemBotom">
        <button class="" @click="increment">+</button>
        <button class="" @click="decrement">-</button>
        <button class="" @click="reset">Reset</button>
      </div>
      <p>Valor anterior: {{ previousCounter }}</p>
    </div>
  </div>
</template>

<script>

import "@/assets/css/counter/counter.css";

export default {
  name: "Counter ",
  data() {
    return {
      counter: 0,
      previousCounter: 0,
      counterColor: 'black',
       
    };
  },
  methods: {
    increment() {
      this.previousCounter = this.counter;
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  },
  beforeUpdate() {
    if (this.counter > this.previousCounter) {
      this.counterColor = 'green';
    } else if (this.counter < this.previousCounter) {
      this.counterColor = 'red';
    } else if (this.counter == 0){
      this.counterColor = 'black';
    }
  },
  updated() {
    // Puedes realizar acciones aquí que dependan de la vista actualizada
    console.log("La vista se ha actualizado.");
  },
};
</script>

<style>
/* Estilos para tu componente */
</style>
