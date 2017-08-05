/**
 * Getters
 * @param {*} state
 */
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity, title, price }) => {
    const entry = state.products.all.find(p => p.id === id)
    return {
      id: entry.id,
      title: entry.title,
      price: entry.price,
      quantity: quantity
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
