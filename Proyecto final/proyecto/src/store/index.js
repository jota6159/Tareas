import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        codigo: '',
        vehiculos: [],
        vehiculosF: [],
        vehiculo: {
            id: '',
            Run: '',
            Marca: '',
            Modelo: '',
            serieCasco: ''
        }
    },
    mutations: {
        asignarCodigo(state, payload) {
            state.codigo = payload
        },
        asignarVehiculo(state, dato) {
            state.vehiculos.push(dato)
            localStorage.setItem('veh', JSON.stringify(state.vehiculos))
        },
        filtrar(state, payload) {
            state.vehiculosF = state.vehiculos.filter(item => item.Run === payload)
            localStorage.setItem('veh', JSON.stringify(state.vehiculosF))
        },

        eliminar(state, payload) {
            state.vehiculos = state.vehiculos.filter(item => item.id !== payload)
            localStorage.setItem('veh', JSON.stringify(state.vehiculos))

        },
    },


    actions: {
        cargarLocalStorage({ commit }) {
            if (localStorage.getItem('veh')) {
                const veh = JSON.parse(localStorage.getItem('veh'))
                commit('cargar', veh)
                return
            }

            localStorage.setItem('veh', JSON.stringify([]))
        },
        guardarCodigo({ commit }, dato) {
            commit('asignarCodigo', dato)
            console.log * (dato, this.codigo)
        },
        setVehiculo({ commit }, dato) {
            commit('asignarVehiculo', dato)
        },
        filtrarV({ commit }, cod) {
            commit('filtrar', cod)
        },
        deleteV({ commit }, id) {
            commit('eliminar', id)
        }
    },
    modules: {}
})