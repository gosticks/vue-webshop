import * as types from './mutation-types.js'

/**
 * Actions
 * @param {*} param0
 * @param {*} product
 */
export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    console.debug('Adding product', product)
    commit(types.ADD_TO_CART, {
      id: product.id,
      title: product.title
    })
  }
}

export const removeItemFromCart = ({ commit }, id) => {
  console.debug('removing item from cart')
  commit(types.REMOVE_FROM_CART, {
    id: id
  })
}

export const decrementInCart = ({ commit }, id) => {
  console.debug('decresing item cound in the cart', id)
  commit(types.DECREMENT_IN_CART, {
    id: id
  })
}
