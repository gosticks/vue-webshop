import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store.js'
import { currency } from './filters/currency.js'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import PortalVue from 'portal-vue'

// Main App
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import './assets/sass/main.scss'
import 'es6-promise/auto'

// plugin setup
Vue.use(PortalVue)
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)

// filter setup
Vue.filter('currency', currency)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

// A little dirty but should work for the start
// The bus is used to broadcast events
const eventBus = new Vue()

// Add to Vue properties by exposing a getter for $bus
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return eventBus
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
