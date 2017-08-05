<template>
  <div class="item-wrapper container">
    <div v-if="product" class="row">
      <div class="seven columns">
        <img :src="product.thumb" style="width: 100%;">
      </div>
      <div class="five columns">
        <h4>{{product.title}}</h4>
        <h5>{{product.price | currency}}</h5>
        <p>
          Lorem upsum place holder pipsum
        </p>
        <button @click="addItemToCart()">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import shop from '../../store/modules/shop-mockup'

export default {

  created () {
    this.$store.dispatch('getAllProducts')
  },

  mounted () {
    let pthis = this
    shop.getProductById(this.id, function (product) {
      console.debug('got product', product)
      pthis.product = product
    })
  },

  data () {
    return {
      id: this.$route.params.id,
      product: false
    }
  },

  computed: {
    ...mapGetters({
      products: 'allProducts'
    })
  },

  methods: {
    ...mapActions([
      'addToCart'
    ]),

    addItemToCart () {
      if (this.product) {
        this.addToCart(this.product)
      }
    },

    computedPrice (price) {
      return price + ' $'
    }
  }
}
</script>

<style>
  .item-wrapper {

  }
</style>
