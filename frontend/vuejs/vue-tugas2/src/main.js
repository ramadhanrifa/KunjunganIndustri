// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const routes = [
    {
        path:'/',
        component: App,
        name: "Beranda",
    }
]


const app = createApp(App)

app.use(router)

app.mount('#app')
