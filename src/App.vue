<template>
  <div class="app-wrapper blurable blur">
    <div class="layout-wrapper">
      <oxy-header></oxy-header>
      <router-view></router-view>
    </div>
    <oxy-footer class="footer-wrapper"></oxy-footer>
  </div>
</template>

<script>
  import OxyFooter from './components/GeneralViews/OxyFooter.vue'
  import OxyHeader from './components/GeneralViews/OxyHeader.vue'

  export default {
    components: {
      OxyFooter,
      OxyHeader
    },

    data () {
      return {
        showCart: true
      }
    }
  }
</script>

<style lang="scss">
  .layout-wrapper, .app-wrapper {
    min-height: 100vh;
  }

  .layout-wrapper {
    padding-bottom: 250px;
  }

  .footer-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
  }
</style>
