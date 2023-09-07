const Counter = {
    path: '/counter-component',
    name: 'counter',
    component: () =>
        import('@/components/counter/Counter.vue'),
};

export default Counter;