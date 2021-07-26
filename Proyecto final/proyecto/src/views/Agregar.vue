<template>
  <div>
    <form @submit.prevent="procesarFormulario">
      <Inputs :vehiculo="vehiculo" />
    </form>
    
  </div>
</template>

<script>
import Inputs from "../components/Inputs.vue";
import { mapActions, mapState } from "vuex";
const shortid = require("shortid");

export default {
  name: "Agregar",
  components: {
    Inputs,
  },
  data() {
    return {
      vehiculo: {
        id: "",
        Run: "",
        Marca: "",
        Modelo: "",
        serieCasco: "",
      },
    };
  },
  props: {
    ...mapState(["vehiculos"]),
  },

  methods: {
    ...mapActions(["setVehiculo"]),
    procesarFormulario() {
      this.vehiculo;
      this.vehiculo.id = shortid.generate();
      console.log(this.vehiculo);
      this.setVehiculo(this.vehiculo);
      this.vehiculo = {
        id: "",
        Run: "",
        Marca: "",
        Modelo: "",
        serieCasco: "",
      };
    },
  },
};
</script>

<style scoped>
#texto {
  text-align: left;
  margin: 10%;
  align-items: center;
}
</style>