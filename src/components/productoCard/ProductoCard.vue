<!-- JSX en su caso html y css -->
<template>
    <div class="product-card">
      <h2>{{ producto.nombre }}</h2>
      <p>Precio: {{ producto.precio }} USD</p>
    </div>
  </template>
  
  <!-- Logica de javscript componente uso de funciones o hooks de vue.js -->
  <script>
  export default {
    name: 'ProductCard',
    //prop llamada producto
    props: {
      producto: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <!-- Etiqueta de stylos primera prueba -->
  <style scoped>
    .product-card {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
  }
  </style>
  