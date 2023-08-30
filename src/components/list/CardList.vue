<template>
    <div>
        <ul>
            <li>{{ id }}</li>
            <li>{{ name }}</li>
            <li>{{ lastname }}</li>
            <li>{{ country }}</li>
            <button @click="sendMessage">Mensaje al padre</button>
            
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    }
  },
  methods: {
    sendMessage() {
      this.$emit('custom-event', `Yo soy el usuario ${this.name} y mi ID es ${this.id}`);
    }
  }

};</script>