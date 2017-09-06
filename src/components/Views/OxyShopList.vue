<template>
  <div class="container">
    <p>This shop is work in progress!</p>
    <h3 class="category-header"><b>Suggested</b></h3>
    <oxy-category-slider></oxy-category-slider>
    <h3 class="category-header"><b>Mixed</b> <small>Category </small>  </h3>
    <div class="row product-list" v-if="products.length > 0">
      <div v-for="item of products" class="columns" @click="itemSelected(item.id)"> 
        <oxy-product :product="item"></oxy-product>
      </div>
    </div>
  </div>
</template>

<script>
import shop from '../../store/modules/shop-mockup'
import OxyRating from '../UIComponents/OxyRating'
import OxyProduct from '../UIComponents/OxyProduct'
import OxyCategorySlider from '../UIComponents/OxyCategorySlider'

export default {
  components: {
    OxyProduct,
    OxyCategorySlider,
    OxyRating
  },

  methods: {
    priceString (priceObj) {
      return priceObj.usd + ' $'
    },

    itemSelected (id) {
      this.$router.push({ path: 'product/' + id, params: {id: id} })
    }
  },

  created () {
    this.$store.dispatch('getAllProducts')
    let pthis = this
    shop.getProducts(function (products) {
      pthis.products = products
    })
  },

  data () {
    return {
      showModal: true,
      products: []
    }
  }
}
</script>

<style lang="scss">
  .category-header {
    padding-left: 15px;
  }
  .product-list {
    .columns, .column{
      margin: 0;
      padding: 12px;
      width:100%;

      @media (min-width: 768px) {
        width: 50%;
      }

      @media (min-width: 1024px) {
        width: 33%;
      }

      @media (min-width: 1920px) {
        width: 25%;
      }
    }
  }
</style>
