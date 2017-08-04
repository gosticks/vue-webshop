import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart.js'
import products from './modules/products.js'
import * as actions from './actions.js'
import * as getters from './getters.js'

Vue.use(Vuex)

// configure vuex store
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  }
})
