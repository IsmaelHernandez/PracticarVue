<template>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">Practica Vue</div>
      <div class="navbar-menu">
        <ul class="navbar-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/counter-component">Counter</router-link></li>
          <li><router-link to="/circle-component">Circle</router-link></li>
          <li><router-link to="/form-component">Form</router-link></li>
          <li><router-link to="/list-component">List</router-link></li>
          <li><router-link to="/pokedex-component">Pokedex</router-link></li>
          <li><router-link to="/carrito-component">Carrito</router-link></li>
          
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import "@/assets/css/header/header.css";

export default {
  name: 'Header'
}
</script>


