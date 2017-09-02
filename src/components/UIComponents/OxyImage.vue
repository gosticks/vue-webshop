// OxyImagge helps to load images asynch 
// adds loading indicator 
// if laod fails also adds a image not found placeholder
<template>
  <div class="oxy-image-wrapper">
    <oxy-spinner v-if="!isLoaded"></oxy-spinner>
    <template :ref="oxyImageHolder" v-if="!notFound">
      <img :src="src" />
    </template>
    <template v-else>
      <img :src="notFoundImage" />
    </template>
  </div>
</template>

<script>
import OxySpinner from './OxySpinner'

export default {
  components: {
    OxySpinner
  },
  props: {
    notFoundImage: {
      type: String,
      required: false,
      default: 'static/img/image_not_found.svg'
    },
    src: {
      type: String,
      required: false,
      default: 'static/img/image_not_found.svg'
    }
  },

  mounted () {
    this.image = new Image()
    this.image.onload = this.loadCompleted
    this.image.onerror = this.loadError
    this.image.src = this.src
  },

  data () {
    return {
      isLoaded: false,
      notFound: true,
      image: null
    }
  },

  methods: {
    loadError: function (event) {
      console.warn('Failed to laod ressource', event)
      this.isLoaded = true
      this.notFound = true
    },
    loadCompleted: function (success) {
      console.log('Image loaded', success, this)
      this.isLoaded = true
      this.notFound = false
    }
  }
}
</script>

<style>
  .oxy-image-wrapper {
    display: inline-block;
    text-align: center;
  }

  .oxy-image-wrapper img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
</style>
