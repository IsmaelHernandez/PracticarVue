import { createApp } from 'vue'
import store from './store'; // Importa el store
import App from './App.vue'
import router from './router'
import './assets/scss/styles.scss'



const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
