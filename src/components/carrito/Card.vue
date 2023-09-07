<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">
      <div class="card-body">
        <p>{{ id }}</p>
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          $<span>{{ price }}</span>
        </p>
        <button @click="add(producto)" type="btn btn-dark">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const add = (props) => {
      store.dispatch("addCarrito", props);
    };

    return {
      add,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
  },
};
</script>
