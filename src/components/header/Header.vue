<template>
    <header>
      <nav>
        <ul>
          <li v-for="route in routes" :key="route.name">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import "@/assets/css/header/header.css";
  export default {
    data() {
      return {
        routes: [],
      };
    },
    created() {
      this.routes = this.$router.options.routes.filter((route) => route.name);
    },
  };
  </script>
  
 