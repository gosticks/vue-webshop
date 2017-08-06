<template>
  <div class="container">
    <p>This shop is work in progress!</p>
    <div class="row product-list" v-if="products.length > 0">
      <div v-for="item of products" class="columns" @click="itemSelected(item.id)"> 
        <div class="item product">
          <img class="product-thumb" :src="item.thumb">
          <p class="product-name">{{item.title}}</p>
          <oxy-rating :v-if="item.rating" :rating="item.rating"></oxy-rating>
          <p class="product-price">{{item.price | currency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shop from '../../store/modules/shop-mockup'
import OxyRating from '../UIComponents/OxyRating'

export default {
  components: {
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

  .item.product {
    text-align: center;
    cursor: pointer;

    &:hover {
      .product-thumb {
        transform: scale(1.01);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
      }
      .product-name {
        font-weight: 500;
      }
    }

    .product-name {
      margin: 0;
    }

    .product-price {
      opacity: 0.5;
    }

    .product-thumb {
      width: 100%;
      transition: all 160ms ease-in-out;
      border-radius: 6px;
    }
  }
</style>
