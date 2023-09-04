import { createStore } from 'vuex';

const store = createStore({
  state: { // Aquí se almacena el estado de la aplicación
    productos: [],
    carrito: {}, //obj que almacenara otros obj
    count: 0, 
  
  },
  mutations: { // Solo modifica el state(estado)
    setProducto(state, payload){
      state.productos = payload
      console.log(state.productos)
    },
    setCarrito(state, paylod){
      state.carrito[paylod.id] = paylod
    },
    increment(state) {
      state.count = count + 1;
    },
    
  },
  actions: { // Aquí se definen las acciones que pueden llamar a mutaciones
            //llamdo al api.json
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json');
        const data = await res.json()
        commit('setProducto', data)
      } catch (error) {
        console.log(error)
      }
    },
    addCarrito({commit, state}, producto){
      state.carrito.hasOwnProperty(producto.id)
        ? producto.price = state.carrito[producto.id].amount + 1
        : producto.cantidad = 1
        commit('setCarrito', producto)
    },
    increment({commit}) {
      commit('increment')
    },

  },
  getters: { // Aquí se definen los getters para acceder a los datos del state
    getCount(state) {
      return state.count;
    },
    
  }
});

export default store;
