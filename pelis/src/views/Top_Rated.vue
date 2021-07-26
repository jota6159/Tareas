<template>
  <div class="movie.poster_path"></div>
</template>

<script>



import Pelicula from "@/models/Movie";
export default {
  props: {
    movie: {
      required: true,
      type: Movie,
    },
  },
 /*  computed: {
    pokemonId() {
      if (this.pokemon.id >= 100) return this.pokemon.id;
      if (this.pokemon.id >= 10) return `0${this.pokemon.id}`;
      return `00${this.pokemon.id}`;
    },
  }, */
};
</script>

<style>

</style>