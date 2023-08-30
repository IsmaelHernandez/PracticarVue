<template>
    <div class="">
        <div class="">
            <h1>Lista de datos prueba</h1>
        <div v-for="(item, index) in arrayData" :key="index"
        >
        <!-- Mediante props mando al componente hijo -->
          <CardList
            :id="index"
            :name="item.name ?? ''"
            :lastname="item.lastname ?? ''"
            :country="item.country ?? ''"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CardList from './CardList.vue'
  export default {
    name: 'ListComponent',
    components: {
        CardList
    },
    data() {
        return {
            arrayData: [
                {
                    id: 1,
                    name: 'Ismael',
                    lastname: 'Hernandez',
                    country: 'Mexico'
                },
                {
                    id: 2,
                    name: 'Monica',
                    lastname: 'Hernandez',
                    country: 'Mexico'
                },
                {
                    id: 3,
                    name: 'Monica',
                    lastname: 'Hernandez',
                    country: 'Mexico'
                }

            ]
        }
    }
  }
  </script>
  
 