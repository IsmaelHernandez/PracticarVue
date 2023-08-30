<template>
  <div class="containerCircle">
    <div class="itemCircle">
        <div class="circleCenter">
            <div class="circle" :class="{ yellow: isYellow, gray: !isYellow }">   
            </div>
        </div>
        <div class="btnCenter">
            <button @click="toggleColor">Cambiar Color</button>
        </div>
    </div>
  </div>
</template>

<script>
import Circle from "./Circle.vue";
import "@/assets/css/circle/circle.css";
export default {
  name: "Circle",
  data() {
    return {
      isYellow: true,
    };
  },
  methods: {
    toggleColor() {
      this.isYellow = !this.isYellow;
    },
  },
};
</script>
