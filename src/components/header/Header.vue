<template>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">Practica Vue</div>
      <div class="navbar-menu">
        <ul class="navbar-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/counter">Counter</router-link></li>
          <li><router-link to="/circle">Circle</router-link></li>
          <li><router-link to="/form">Form</router-link></li>
          <li><router-link to="/listUser">List</router-link></li>
          <li><router-link to="/pokedex">Pokedex</router-link></li>
          <li><router-link to="/person">Person</router-link></li>
         
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


