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
            <li @click="showCart()" class="cart-button"><span class="items-in-cart"> {{cartLength}}</span> <i class="ion-ios-cart-outline"></i></li>
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
import { mapGetters } from 'vuex'
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
  $nav-bar-height: 40px;
  .nav-bar {
    padding: 7px 0px;
    height: $nav-bar-height;
    //line-height: $nav-bar-height;
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
            font-size: 2.2rem;
          }

          .items-in-cart {
            display: inline-block;
            font-size: 2.2rem;
            font-weight: 100;
            opacity: 0.6
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
  
    .cart-button {
      border-radius: 7px;
      padding: 0 7px;
      &:hover {
        background-color: #EEE; 
      }

      &:activer {
        background-color: #000;
        color: #000;
      }
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
      font-size: 14px;

      &.ion-ios-close-empty {
        font-size: 22px;
        line-height: 30px;
      }
    }
  }
</style>
