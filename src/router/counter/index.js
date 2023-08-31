const routesCounter = {
    path: '/counter',
    name: 'counter',
    component: () =>
        import('@/components/counter/Counter.vue'),
};

export default routesCounter;