<template>
  <div class="item-wrapper container">
    <div class="btn-back" @click="$router.go(-1)" v-if="hasHistory">
      <i class="ion-ios-arrow-back"></i> Back
    </div>
    <div v-if="product" class="row">
      <div class="seven columns">
        <img :src="product.thumb" style="width: 100%;">
      </div>
      <div class="five columns">
        <h4>{{product.title}}</h4>
        <h5 :class="{'sale-item' : product.sale}">
          <span>{{product.price | currency}}</span>
          <template v-if="product.sale"> {{product.sale | currency}} </template>
        </h5>
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
    }),

    hasHistory: function () {
      console.log(window.history.length)
      return window.history.length
    }
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

<style lang="scss">
  .btn-back {
    font-weight: 100;
    cursor: pointer;
    font-size: 2.5rem;
    margin-bottom: 20px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */ 
  
    &:hover {
      font-weight: 400;
    }
  }
</style>
