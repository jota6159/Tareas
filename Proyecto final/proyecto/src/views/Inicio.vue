<template>
<div id="inicio">
   <img alt="stn" src="@/assets/stn.png">
   <br>
   
   
   <div id="buscar">
     

<Buscar/>
 
   </div>
   <router-view />
</div>
</template>

<script>  
import Buscar from '../components/Buscar.vue'
import {mapState,mapActions} from 'vuex'

export default {
  name: 'Inicio',
  components:{
    Buscar
    
  },
  
 
  computed:{
    ...mapState(['codigo'])
    
  } ,
  methods: {
    
   ...mapActions(['asignarCodigo'])

    },
  
}

</script>

<style>
#inicio {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 30%;
  margin-top: 2%;
  
}
#cuadrito{
  margin-right: 1%;
}
#buscar{
  margin-top: 5%;
margin-bottom: 10%;
}

</style>