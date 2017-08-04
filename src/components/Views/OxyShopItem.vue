<template>
  <div class="item-wrapper container">
    <div v-if="item" class="row">
      <div class="seven columns">
        <img :src="item.preview" style="width: 100%;">
      </div>
      <div class="five columns">
        <h4>{{item.name}}</h4>
        <h5>{{computedPrice(item.price)}}</h5>
        <p>
          {{item.short}}
        </p>
        <button @click="addToCart(pr)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted () {
    this.loadItemData(this.id)
  },

  created () {
    this.$store.dispatch('getAllProducts')
  },

  data () {
    return {
      id: this.$route.params.id,
      item: false,
      pr: {
        id: 1,
        title: 'iPad 4 Mini',
        price: 500.01,
        inventory: 2
      }
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
    computedPrice (price) {
      return price + ' $'
    },

    loadItemData (id) {
      console.warn('Loading Debug data')
      this.item = {
        id: id,
        price: 29.95,
        name: 'Product item',
        short: 'Lorem ipsum what is going on this is qhas thast neas, ipsum what is going on this is qhas thast neas',
        preview: 'https://unsplash.it/700/700',
        images: [
          {
            src: 'https://unsplash.it/400/400',
            title: 'Image title'
          },
          {
            src: 'https://unsplash.it/600/600',
            title: 'Image title'
          },
          {
            src: 'https://unsplash.it/800/800',
            title: 'Image title'
          }
        ]
      }
    }
  }
}
</script>

<style>
  .item-wrapper {

  }
</style>
