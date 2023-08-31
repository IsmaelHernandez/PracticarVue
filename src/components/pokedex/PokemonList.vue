<template>
    <div class="itemList">
        <ul>
            <li>{{ id }}</li>
            <li>{{ username }}</li>
            <li>{{ phone }}</li>
            <li>{{ website }}</li>
        </ul>
    </div>
  </template>
  
  <script>

  export default {
  name: 'PokemonList',
  props: {
    id: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    }
  }

};
  </script>
  