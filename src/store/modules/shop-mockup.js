/**
 * Mocking client-server processing
 */
const _products = [
  {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'thumb': 'https://unsplash.it/300/300', 'inventory': 2, 'rating': 4.2},
  {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'thumb': 'https://unsplash.it/400/400', 'inventory': 10, 'rating': 2},
  {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'thumb': 'https://unsplash.it/300/300', 'inventory': 5, 'rating': 3.5},
  {'id': 4, 'title': 'Elphant T-Shirt Brown', 'price': 199.99, 'thumb': 'https://unsplash.it/600/600', 'inventory': 10, 'rating': 4.9}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  getProductById (id, cb) {
    setTimeout(function () {
      console.debug(_products)
      const el = _products.find(p => ('' + p.id) === id)
      if (el) {
        cb(el)
      } else {
        console.warn('failed to find element for id', id)
      }
    }, 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
