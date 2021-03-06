import shop from './shop-mockup.js'
import * as types from '../mutation-types.js'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { id, title, price }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id: id,
        title: title,
        price: price,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [types.REMOVE_FROM_CART] (state, { id }) {
    const record = state.added.find(p => p.id === id)
    if (record) {
      let productObj = state.all.find(p => p.id === id)
      if (productObj) {
        productObj.inventory += record.quantity
      }
      state.added.splice(state.added.indexOf(record), 1)
    }
  },

  [types.DECREMENT_IN_CART] (state, { id }) {
    const record = state.added.find(p => p.id === id)
    if (record) {
      if (record.quantity === 1) {
        let productObj = state.all.find(p => p.id === id)
        if (productObj) {
          productObj.inventory += record.quantity
        }
        state.added.splice(state.added.indexOf(record), 1)
      } else {
        record.quantity--
      }
    }
  },

  [types.SET_CART] (state, productList) {
    if (productList) {
      state.added = productList
    }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
