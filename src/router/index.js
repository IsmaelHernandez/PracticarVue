import { createRouter, createWebHistory } from 'vue-router';

import Counter from '@/components/counter/Counter.vue'
import Circle from '@/components/circle/Circle.vue'
import Form from '@/components/form/FormComponent.vue'
import List from '@/components/list/ListComponent.vue'

const routes = [
    { path: '/counter', component: Counter },
    { path: '/circle', component: Circle },
    { path: '/form', component: Form },
    { path: '/list', component: List },
    
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;