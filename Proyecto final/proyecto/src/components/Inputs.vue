<template>

  <div id="texto">
      
    <span >Run Propietario</span>
  <div class="input-group input-group-sm mb-3">
  
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model.trim="vehiculo.Run">
</div>
<span>Marca </span>
<div class="input-group input-group-sm mb-3">
  
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model.trim="vehiculo.Marca">
</div>
 <span>Modelo</span>
<div class="input-group input-group-sm mb-3">
 
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model.trim="vehiculo.Modelo">
</div>
<span>Serie casco</span>
<div class="input-group input-group-sm mb-3">
 
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model.trim="vehiculo.serieCasco">
</div>
<div>
  
  <BAgregar  type="submit"/>




</div>
<router-view />

</div>

</template>

<script>
import {mapActions} from 'vuex'
import BAgregar from '../components/BAgregar.vue'
export default {
  name:'Inputs',
  components:{
BAgregar  
  },
  props:{
      vehiculo: Object
  },
 
    methods: {
...mapActions[('guardarVehiculo')],

    },
    computed: {
        bloquear(){
            return this.vehiculo.Run.trim() === "" ? true : false
        }
  }
    

}
</script>

<style>

</style>