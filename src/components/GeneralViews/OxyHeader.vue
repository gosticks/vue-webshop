<template>
  <div class="header">
      <div class="nav-bar branding">
        <div class="left">
          <ul>
            <li><i class="icon arrows icon-arrows-hamburger-2"></i></li>
          </ul>
        </div>
        <div class="center">BRANDNAMEO</div>
        <div class="right">
          <ul>
            <li @click="showCart()"><span class="items-in-cart"> {{cartLength}}</span> <i class="ion-ios-cart-outline"></i></li>
          </ul>
        </div>
      </div>
      <div class="nav-bar menu"></div>
      <portal to="modal">
        <div class="container">
          <template v-if="cartLength !== 0"> 
            <oxy-cart-view></oxy-cart-view>
          </template>
          <template v-else>
            <h3>Cart Empry</h3>
            <p>Items added to the cart can be seen here.</p>
          </template> 
          <button @click="closeModal()">Close modal</button>
        </div>
      </portal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import OxyCartView from '../UIComponents/OxyCartView'

export default {
  components: {
    OxyCartView
  },

  data () {
    return {
      disabledModal: false
    }
  },

  computed: {
    ...mapGetters({
      cartLength: 'cartLength'
    })
  },

  methods: {
    showCart () {
      this.disabledModal = true
      this.$bus.$emit('toggleModal', true)
    },

    closeModal () {
      this.disabledModal = false
      this.$bus.$emit('toggleModal', false)
    }
  }
}
</script>

<style lang="scss">
  $nav-bar-height: 66px;
  .nav-bar {
    height: $nav-bar-height;
    line-height: $nav-bar-height;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

    > .left, .right, .center {
      display: inline;

      > ul {
        list-style: none;
        text-decoration: none;

        li {
          cursor: pointer;
          
          i {
            font-size: 2.5rem;
          }

          .items-in-cart {
            display: inline-block;
            font-size: 2rem;
            font-weight: 100;
          }
        }
      }
    }

    .left {
      float: left;
      padding-left: 15px;
    }
    .right {
      float: right;
      padding-right: 15px;
    }
    .center {
      float: center;
    }
  }

  .header {
    .branding {
      text-align: center;
    }
  }

  .product-table {
    width: 100%;

    .table-button {
      top: 3px;
      padding: 5px;
    }

    i {
      color: #000;
      display: inline-block;
      font-size: 18px;

      &.ion-ios-close-empty {
        font-size: 36px;
        line-height: 40px;
      }
    }
  }
</style>
