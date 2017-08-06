<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
    ])
  }
}
</script>

<style>
  .table-button {
    cursor: pointer;
  }
</style>
