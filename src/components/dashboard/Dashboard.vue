<template>
   <h1>Prueba de estados globales vuex</h1>
   <FormItem />
   <ListUsers />

   <div>
    <h1>Importe a counter de cholos</h1>
    <Counter />
   </div>
   
  
</template>

<script>
import FormItem from '@/components/crud/FormItem.vue';
import ListUsers from '@/components/crud/ListUsers.vue';
import Counter from '@/components/counter/Counter.vue'

export default {
  components: {
    FormItem,
    ListUsers,
    Counter,
    
  },
};

</script>