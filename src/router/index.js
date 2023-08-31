import { createRouter, createWebHistory } from 'vue-router';

import routesCounter from './counter'
import routesCircle from './circle'
import routesForm from './form'
import routesList from './list'

const routes = [
    routesCounter,
    routesCircle,
    routesForm,
    routesList
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;