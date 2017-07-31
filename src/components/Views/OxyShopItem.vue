<template>
  <div class="item-wrapper container">
    <div v-if="item" class="row">
      <div class="seven columns">
        <img :src="item.preview" style="width: 100%;">
        <lightbox
          id="mylightbox" 
          :images="item.images"
          :image_class=" 'img-responsive img-rounded' "
          :album_class=" 'my-album-class' ">
        </lightbox>
      </div>
      <div class="five columns">
        <h4>{{item.name}}</h4>
        <h5>{{computedPrice(item.price)}}</h5>
        <p>
          {{item.short}}
        </p>
        <button>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.loadItemData(this.id)
  },

  data () {
    return {
      id: this.$route.params.id,
      item: false
    }
  },

  methods: {
    computedPrice (price) {
      return price + ' $'
    },

    loadItemData (id) {
      console.warn('Loading Debug data')
      this.item = {
        id: id,
        price: 29.95,
        name: 'Product item',
        short: 'Lorem ipsum what is going on this is qhas thast neas, ipsum what is going on this is qhas thast neas',
        preview: 'https://unsplash.it/700/700',
        images: [
          {
            src: 'https://unsplash.it/400/400',
            title: 'Image title'
          },
          {
            src: 'https://unsplash.it/600/600',
            title: 'Image title'
          },
          {
            src: 'https://unsplash.it/800/800',
            title: 'Image title'
          }
        ]
      }
    }
  }
}
</script>

<style>
  .item-wrapper {

  }
</style>
