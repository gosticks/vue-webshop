import shop from './shop-mockup.js'
import * as types from '../mutation-types.js'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    console.debug(products)
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    console.debug(state, id)
    let item = state.all.find(p => p.id === id)
    if (item) {
      item.inventory--
    } else {
      console.warn('Could not find product in cart')
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
