<template>
<div>
<h1>Vehiculos de: {{codigo}}</h1>
  <ListaVehiculos/>
</div>

</template>

<script>
import { mapState } from "vuex";
import ListaVehiculos from '../components/ListaVehiculos.vue'
export default {
     components:{
    ListaVehiculos
    },
    computed:{
      ...mapState(['codigo'])
    }

}
</script>

<style>

</style>