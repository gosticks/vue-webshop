<template>
  <div class="container">
    <p>This shop is work in progress!</p>
    <div class="row">
      <div v-for="item of items" class="four columns" @click="itemSelected(item.id)"> 
        <div class="item product">
          <img class="product-thumb" :src="item.thumbnail">
          <p class="product-name">{{item.name}}</p>
          <p class="product-price">{{priceString(item.prices)}}</p>
        </div>
      </div>
    </div>
    <portal to="modal">
      <div class="container">
        <h1>Testing Modal</h1>
        <p>Lorem ipsum some content goes in here</p>
        <button @click="closeModal()">Close modal</button>
      </div>
    </portal>
  </div>
</template>

<script>
export default {
  methods: {
    priceString (priceObj) {
      return priceObj.usd + ' $'
    },

    itemSelected (id) {
      this.$router.push({ path: 'product/' + id, params: {id: id} })
    },

    closeModal () {
      this.$bus.$emit('toggleModal', false)
    }
  },

  data () {
    return {
      showModal: true,
      items: [
        {
          id: 'f2123jek21ei231',
          name: 'Diasal T-Shirt',
          prices: {
            usd: 29.95,
            euro: 25.95
          },
          thumbnail: 'https://unsplash.it/300/300'
        },
        {
          id: 'f2123jek21ei231',
          name: 'Item 01',
          prices: {
            usd: 19.95,
            euro: 15.95
          },
          thumbnail: 'https://unsplash.it/400/400'
        },
        {
          id: 'f2123jek21ei231',
          name: 'Item 01',
          prices: {
            usd: 9.95,
            euro: 5.95
          },
          thumbnail: 'https://unsplash.it/500/500'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
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
