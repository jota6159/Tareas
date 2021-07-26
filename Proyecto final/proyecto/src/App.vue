<template>
  <div id="app">
     <b-navbar toggleable type="dark" variant="dark">
       
    <b-navbar-brand id="icono" >STN</b-navbar-brand>
    
</b-navbar>
    <div id="nav">
      <router-link to="/">Inicio</router-link> |     
    <router-link to="/agregar">Agregar</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";




// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueRouter);
export default {
  name: "App",
  components: {},
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
  
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#icono{
  margin-left: 3%;
}
#iconito{
  max-width: 1%;
  max-height: 1%;
  align-self: initial;
}
</style>
