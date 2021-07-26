<template>
<div>
    <form @submit.prevent="procesarCodigo">
      
    
    <input id="cuadrito" type="text"  placeholder="Ingrese codigo" v-model.trim="codigo">
  
  <button class="btn btn-success" type="submit">Buscar</button>
  <h1>{{codigo}}</h1>
  </form>
  </div>
</template>

<script>

import { mapActions } from "vuex";
export default {

  methods: {
    ...mapActions(["guardarCodigo"]), 
    ...mapActions(["filtrarV"]),
    procesarCodigo(){
        this.codigo;
        this.guardarCodigo(this.codigo);
        this.filtrarV(this.codigo);
        this.$router.push('/vehiculos');
    }, getVehiculos(){
            this.veh=this.vehiculos;
            console.log(this.veh);
        }
  },
};
</script>
