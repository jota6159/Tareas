<template>
  <div id="despliegue">
    
    <b-container class="bv-example-row mb-3">
      <b-row cols="2">
        <b-col v-for="item in vehiculosF" :key="item.id">
          <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text id="oredenado">
                <span>Run Propietario: </span>{{ item.Run }}
                <br />
                <span>Marca: </span>{{ item.Marca }}
                <br />
                <span>Modelo: </span>{{ item.Modelo }}
                <br />
                <span>Serie del Casco: </span>{{ item.serieCasco }}
              </b-card-text>

              <b-button id="but" href="#" variant="success"
                >Ver vehiculo</b-button
              >
              <b-button @click="borrar(item.id)" variant="danger"
                >Eliminar</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- </b-card-group> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["deleteV"]),
    borrar(id) {
      this.deleteV(id);
      this.$router.push("/");
      
    },
  },

  data() {
    return {
      veh: Object,
      vehiculo: {
        id: "",
        Run: "",
        Marca: "",
        Modelo: "",
        serieCasco: "",
      },
    };
  },

  computed: {
    ...mapState(["vehiculos"]),
    ...mapState(["codigo"]),
    ...mapState(["vehiculosF"]),
  },
};
</script>
<style scoped>
#oredenado {
  text-align: left;
  margin: 10%;
  align-items: center;
}
#despliegue {
  margin-top: 5%;
  align-items: center;
  align-content: center;
}
#but {
  margin-right: 3%;
}
</style>

