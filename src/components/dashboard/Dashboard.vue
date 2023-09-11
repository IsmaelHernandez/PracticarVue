<template>
   <h1>Prueba de estados globales vuex</h1>
   <FormItem />
   <ListUsers />
</template>

<script>
import FormItem from '@/components/crud/FormItem.vue';
import ListUsers from '@/components/crud/ListUsers.vue';

export default {
  components: {
    FormItem,
    ListUsers,
  },
};

</script>