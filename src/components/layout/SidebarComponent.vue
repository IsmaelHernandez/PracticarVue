<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav :class="{ active: isSidebarActive }" id="sidebar">
      <div class="sidebar-header">
        <h3>Practicar Vue.js</h3>
      </div>

      <ul class="list-unstyled components">
      
        <li :class="{ active: isActive('/circle') }">
          <router-link :to="{ name: 'circle' }">Circle</router-link>
        </li>
        
        <li :class="{ active: isActive('/form') }">
          <router-link :to="{ name: 'form' }">Form</router-link>
        </li>
        <li :class="{ active: isActive('/list') }">
          <router-link :to="{ name: 'list' }">List User</router-link>
        </li>
        <li :class="{ active: isActive('/counter') }">
          <router-link :to="{ name: 'counter' }">Counter</router-link>
        </li>
        <li :class="{ active: isActive('/pokedex') }">
          <router-link :to="{ name: 'pokedex' }">List Data</router-link>
        </li>
        <li :class="{ active: isActive('/person') }">
          <router-link :to="{ name: 'person' }">MapAction</router-link>
        </li>
        <li :class="{ active: isActive('/dashboard') }">
          <router-link :to="{ name: 'dashboard' }">Form User</router-link>
        </li>
        <li :class="{ active: isActive('/sass-component') }">
          <router-link :to="{ name: 'sass-component' }">Sass Component</router-link>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button @click="toggleSidebar" type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fa-solid fa-bars"></i>
            <span>Toggle Sidebar</span>
          </button>
          <button
            class="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-justify"></i>
          </button>

         
        </div>
      </nav>
      <RouterView />
    </div>
  </div>
</template>

<script>
import "@/assets/css/layout/sidebar.css";
export default {
  name: "SidebarComponent",
  data(){
    return {
      isSidebarActive: false,

    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    isActive(route){
      return this.$route.path === route;
    }
  },
};
</script>
