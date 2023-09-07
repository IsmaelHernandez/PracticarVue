import { createRouter, createWebHistory } from 'vue-router';

import Counter from '@/components/counter/Counter.vue'
import Circle from '@/components/circle/Circle.vue'
import Form from '@/components/form/FormComponent.vue'
import List from '@/components/list/ListComponent.vue'
import pokedex from '@/components/pokedex/view/Pokedex.vue'
import Carrito from '@/components/carrito/Carrito.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'


const routes = [
    { path: '/', component: Dashboard },
    { path: '/counter-component', component: Counter },
    { path: '/circle-component', component: Circle },
    { path: '/form-component', component: Form },
    { path: '/list-component', component: List },
    { path: '/pokedex-component', component: pokedex },
    { path: '/carrito-component', component: Carrito },
    
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;