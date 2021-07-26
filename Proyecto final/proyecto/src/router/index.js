import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/',
        name: 'Inicio',

        component: () =>

            import ( /* webpackChunkName: "Busqueda" */ '../views/Inicio.vue'),

    },
    {
        path: '/agregar',
        name: 'agregar',

        component: () =>

            import ( /* webpackChunkName: "Busqueda" */ '../views/Agregar.vue'),

    },
    {
        path: '/vehiculos',
        name: 'vehiculos',

        component: () =>

            import ( /* webpackChunkName: "Busqueda" */ '../views/Vehiculos.vue'),

    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router