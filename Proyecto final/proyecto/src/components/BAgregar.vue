<template>
  <button class="btn btn-success" @click="guardarVehiculo()">Agregar</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dato:{
        
      }
    }
  },
  methods: {
    ...mapActions(["guardarVehiculo"]),
  },
};
</script>

