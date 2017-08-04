<template>
  <div class="header">
      <div class="nav-bar branding">
        <div class="left">
          <ul>
            <li><i class="icon arrows icon-arrows-hamburger-2"></i></li>
          </ul>
        </div>
        <div class="center">BRANDNAMEO</div>
        <div class="right">
          <ul>
            <li @click="showCart()"><span class="items-in-cart"> {{cartLength}}</span> <i class="ion-ios-cart-outline"></i></li>
          </ul>
        </div>
      </div>
      <div class="nav-bar menu"></div>
      <portal to="modal">
        <div class="container" v-if="products.length !== 0">
          <h3>Cart</h3>
          <p>Current items in your cart</p>
          <table class="product-table">
            <thead>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody>
              <tr v-for="p in products" class="row">
                <td>{{ p.title }} </td>
                <td>{{ p.price | currency }} </td> 
                <td>
                  <a class="table-button" @click="decrementInCart(p.id)">
                    <i class="ion-ios-minus-outline"></i>
                  </a>
                  {{ p.quantity }}
                  <a class="table-button" @click="addToCart(p)">
                    <i class="ion-ios-plus-outline"></i>
                  </a>
                </td>
                <td>{{ (p.price * p.quantity) | currency }}</td>
                <td>
                  <a @click="removeItemFromCart(p.id)">
                    <i class="ion-ios-close-empty"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="total-price row">
            <h4 style="float:right;">Total: {{total | currency}}</h4>
          </div>
          <button @click="closeModal()">Close modal</button>
        </div>
        <div v-else class="container">
          <h3>Cart Empry</h3>
          <p>Items added to the cart can be seen here.</p>
          <button @click="closeModal()">Close modal</button>
        </div>
      </portal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  data () {
    return {
      disabledModal: false
    }
  },

  computed: {
    ...mapGetters({
      products: 'cartProducts',
      cartLength: 'cartLength',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },

  methods: {
    ...mapActions([
      'addToCart',
      'removeItemFromCart',
      'decrementInCart'
    ]),

    showCart () {
      this.disabledModal = true
      this.$bus.$emit('toggleModal', true)
    },

    closeModal () {
      this.disabledModal = false
      this.$bus.$emit('toggleModal', false)
    }
  }
}
</script>

<style lang="scss">
  $nav-bar-height: 66px;
  .nav-bar {
    height: $nav-bar-height;
    line-height: $nav-bar-height;

    > .left, .right, .center {
      display: inline;

      > ul {
        list-style: none;
        text-decoration: none;

        li {

          i {
            font-size: 2.5rem;
          }

          .items-in-cart {
            display: inline-block;
            font-size: 2rem;
            font-weight: 100;
          }
        }
      }
    }

    .left {
      float: left;
      padding-left: 15px;
    }
    .right {
      float: right;
      padding-right: 15px;
    }
    .center {
      float: center;
    }
  }

  .header {
    .branding {
      text-align: center;
    }
  }

  .product-table {
    width: 100%;

    .table-button {
      top: 3px;
      padding: 5px;
    }

    i {
      color: #000;
      display: inline-block;
      font-size: 18px;

      &.ion-ios-close-empty {
        font-size: 36px;
        line-height: 40px;
      }
    }
  }
</style>
