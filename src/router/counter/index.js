const Counter = {
    path: '/counter',
    name: 'counter',
    component: () =>
        import('@/components/counter/Counter.vue'),
};

export default Counter;