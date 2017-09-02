<template>
  <div class="item product">
    <p class="product-image-wrapper">
      <oxy-image class="product-thumb" :src="product.thumb"></oxy-image>
    </p>
    <p class="product-name">{{product.title}}</p>
    <oxy-rating :v-if="product.rating" :rating="product.rating"></oxy-rating>
    <p class="product-price" :class="{'sale-item' : product.sale}">
      <span>{{product.price | currency }}</span>
      <template v-if="product.price">{{ product.sale | currency }}</template>
    </p>
  </div>
</template>

<script>
import OxyImage from '../UIComponents/OxyImage'
import OxyRating from './OxyRating.vue'

export default {
  components: {
    OxyImage,
    OxyRating
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .item.product {
    text-align: center;
    cursor: pointer;

    &:hover {
      .product-image-wrapper {
        background-color: transparent;
        overflow: hidden;
        transform: scale(1.00);
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
      > span {opacity: 0.5; }
    }

    .product-image-wrapper {
      display: inline-block;
      width: 100%;
      transition: all 160ms ease-in-out;
      border-radius: 6px;
      overflow: hidden;
    }

    .product-thumb {
      display: block;
      width: 100%;
    }
  }
</style>
