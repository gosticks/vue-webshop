/**
 * Getters
 * @param {*} state
 */
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity
    }
  })
}

export const cartLength = state => {
  var itemCount = 0
  for (let product of state.cart.added) {
    itemCount += product.quantity
  }

  return itemCount
}
