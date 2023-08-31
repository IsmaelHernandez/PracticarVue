<script setup>
import Counter from "./components/counter/Counter.vue";
import Circle from "./components/circle/Circle.vue";
import FormComponent from "./components/form/FormComponent.vue";
import ListComponent from "./components/list/ListComponent.vue"
import Header from './components/header/Header.vue'
</script>

<template>
   <!-- Header -->
   <Header />
  <!-- Componente Counter -->
  <Counter />
  <!-- Componente Circle -->
  <Circle />
  <!-- Componente Form -->
  <FormComponent />
   <!-- Componente props -->
   <ListComponent />
</template>
