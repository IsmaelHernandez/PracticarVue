const pokedex = {
    path: '/pokedex',
    name: 'pokedex',
    component: () => import('@/components/pokedex/view/Pokedex.vue'),
    children: [
      {
        path: 'pokemonlist',
        name: 'pokemonlist',
        component: () => import('@/components/pokedex/PokemonList.vue'),
      },
     
    ],
  };
  
  export default pokedex;
  