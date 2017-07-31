<template>
  <div class="app-wrapper">
    <div class="blurable" :class="{blur : showModal}">
      <div class="layout-wrapper">
        <oxy-header></oxy-header>
        <router-view></router-view>
      </div>
      <oxy-footer class="footer-wrapper"></oxy-footer>
    </div>  
    <oxy-modal v-show="showModal">
      <div slot="container">
        <portal-target name="modal"></portal-target>
      </div>
    </oxy-modal>        
  </div>
</template>

<script>
  import OxyFooter from './components/GeneralViews/OxyFooter.vue'
  import OxyHeader from './components/GeneralViews/OxyHeader.vue'
  import OxyModal from './components/UIComponents/OxyModal.vue'
  
  export default {
    components: {
      OxyFooter,
      OxyHeader,
      OxyModal
    },

    created () {
      this.$bus.$on('toggleModal', (modalState) => {
        console.debug('modal event triggered')
        this.showModal = modalState
      })
    },

    data () {
      return {
        showModal: false
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
