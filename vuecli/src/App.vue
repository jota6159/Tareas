<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12"><h1>Productos</h1></div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <product-form @add-product="addProduct" />
        <product-table
          :products="products"
          @delete-product="deleteProduct"
          @update-product="updateProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductTable from "@/components/ProductTable.vue";
import ProductForm from "@/components/ProductForm.vue";
export default {
  name: "app",
  components: { ProductTable, ProductForm },
  data() {
    return {
      products: [
        { name: "Uranio", description: "Para uso casero", price: 500 },
        { name: "Unicornio", description: "3 cuernos", price: 600 },
        {
          name: "Dinosaurio",
          description: "Velociraptor 5 metros",
          price: 340,
        },
      ],
    };
  },
  methods: {
    addProduct(product) {
      this.products = [...this.products, product];
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
    
    updateProduct(editIndex, editProduct) { this.products = this.products.map((product, index) =>
index === editIndex ? editProduct : product ); },
  },
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
</style>
