<template>
  <div class="container">
    <h1>Carrito</h1>
    {{ carrito }}
    <div class="row">
      <Card
        v-for="(item, index) in productos" :key="index"
        :id="index"
        :price="item.price"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "Carrito",
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });
    //Retornamos lo de la tienda en productos
    const productos = computed(() => store.state.productos);
    const carrito = computed(() => store.state.carrito)

    return {
      productos,
        carrito
    };
  },
};
</script>
