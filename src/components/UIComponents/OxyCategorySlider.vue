<template>
  <div class="category-slider-wrapper">
    <div class="category-slider-scroll">
      <div class="category-slider-card" v-for="category in categories" :style="{background : 'url(' + category.img + ') no-repeat center center'}">
        <div class="category-background-overlay"></div>
        <h5 class="category-title">{{category.title}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
const CategoryMockupData = [{
  title: 'Electronics',
  img: 'https://unsplash.it/200/160/?random',
  url: 'category/electronics'
},
{
  title: 'Books',
  img: 'https://unsplash.it/200/160/?random',
  url: 'category/books'
},
{
  title: 'Health',
  img: 'https://unsplash.it/200/160/?random',
  url: 'category/health'
},
{
  title: 'Software',
  img: 'https://unsplash.it/200/160/?random',
  url: 'category/software'
}]
export default {
  props: {
    categories: {
      required: false,
      type: Array,
      default: () => { return CategoryMockupData }
    }
  }
}
</script>

<style lang="scss">
$category-slider-height: 180px;

  .category-slider-wrapper {
    position: relative;
    display: block;
    width: 100%;
    height: $category-slider-height;
    overflow-y: hidden;
    overflow-x: scroll;
    margin-bottom: 40px;
    border-radius: 5px;
    background-color: #EEE;

    .category-slider-scroll {
      position: relative;
      white-space: nowrap;
      // background-color: #EEE;
      // width: 1000px;
      height: $category-slider-height - 10;

      .category-slider-card {
        display: inline-block;
        position: relative;
        height: 90%;
        width: 270px;
        margin: 12px;
        background-color: #EEE;
        background-size: cover !important;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;

        .category-background-overlay {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          transition: .2s all ease-in;
        }

        &:hover .category-background-overlay {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .category-title {
          color: #FFF;
          position: absolute;
          bottom: 0;
          right: 15px;
        }
      }
    }
  }
</style>
