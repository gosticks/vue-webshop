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
            <li><span class="items-in-cart"> 2 </span> <i class="icon ecommerce icon-ecommerce-bag"></i></li>
          </ul>
        </div>
      </div>
      <div class="nav-bar menu"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  $nav-bar-height: 66px;
  .nav-bar {
    height: $nav-bar-height;
    line-height: $nav-bar-height;

    > .left, .right, .center {
      display: inline;

      > ul {
        list-style: none;
        text-decoration: none;

        li {

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
</style>
