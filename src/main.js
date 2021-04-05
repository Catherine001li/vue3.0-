import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import './index.css'

// import Hello from '../pages/Hello.vue'
// import List from '../pages/List.vue'
console.log(createApp)
const app = createApp(App)
// app.use(VueRouter)
// const routes = [
//   {
//     path: '/',
//     component: Hello
//    },
//   {
//     path: '/list',
//     component: List
//    },
// ]

// const router = new VueRouter({
//     routes
// })

// app.createApp({
//     router
// })
app.mount('#app')
