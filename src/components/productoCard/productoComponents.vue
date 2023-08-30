<template>
    <div>
      <h1>Lista de Productos</h1>
      <ProductCard v-for="producto in productos" :key="producto.id" :producto="producto" />
    </div>
  </template>
  
  <script>
  import ProductoCard from './ProductoCard.vue';
  
  export default {
    components: {
        ProductoCard
    },
    data() {
      return {
        productos: [
          { id: 1, nombre: 'Producto A', precio: 20 },
          { id: 2, nombre: 'Producto B', precio: 30 },
          { id: 3, nombre: 'Producto C', precio: 25 }
        ]
      };
    }
  }
  </script>
  