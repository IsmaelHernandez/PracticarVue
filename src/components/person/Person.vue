<template>
  <h1>Aqui esta person-componente y mande a traer data mediante mapGetters</h1>
  <div v-for="(person, index) in persons" :key="index">
    <CardPerson :name="person.name" :lastname="person.lastname" />
  </div>
  <br>
  <div>
    <h1>Palabra obtenida desde la store con mapState</h1>
    <h3>{{ word }}</h3>
  </div>
  <br>
  <div>
    <h1>Contador consumiendo actions con mapActions jsjs</h1>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, useStore } from "vuex";
import CardPerson from "./CardPerson.vue";

export default {
  components: {
    CardPerson,
  },
  setup: () => ({
    store$: useStore(),
  }),
  computed: {
    ...mapGetters({
      persons: "persons/getPersons",
    }),
    ...mapState({
      word: state => state.word,
      counter: state => state.counter,
    }),
  },
  methods: {
    ...mapActions({
      increment: 'counter/increment',
      decrement: 'counter/decrement',
      reset: 'counter/reset'
    })
  }
};
</script>
