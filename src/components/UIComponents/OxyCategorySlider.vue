<template>
  <div class="category-slider-wrapper">
    <div class="category-slider-scroll">
      <div class="category-slider-card" v-for="category in categories" :style="{backgroundImage : 'url(' + category.src + ')'}">{{category.title}}</div>
    </div>
  </div>
</template>

<script>
const CategoryMockupData = [{
  title: 'Books',
  img: 'https://unsplash.it/200/160',
  url: 'category/books'
},
{
  title: 'Books',
  img: 'https://unsplash.it/200/160',
  url: 'category/books'
},
{
  title: 'Books',
  img: 'https://unsplash.it/200/160',
  url: 'category/books'
},
{
  title: 'Books',
  img: 'https://unsplash.it/200/160',
  url: 'category/books'
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

    .category-slider-scroll {
      position: relative;
      white-space: nowrap;
      // background-color: #EEE;
      // width: 1000px;
      height: $category-slider-height - 20;

      .category-slider-card {
        display: inline-block;
        height: 90%;
        width: 300px;
        margin: 2%;
        background-color: #EEE;
        border-radius: 5px;
      }
    }
  }
</style>
