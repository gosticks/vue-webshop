<template>
  <div class="rating-indicator">
    <i v-for="(_, index) in totalStart" :class="iconForStar(index)">
    </i>
  </div>
</template>

<script>
const numberStars = 5

export default {
  props: {
    editable: {
      type: Boolean,
      required: false,
      default: false
    },
    rating: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      totalStart: numberStars
    }
  },

  methods: {
    iconForStar: function (index) {
      let v = (this.rating - 1.0) - index
      console.debug(index, v, this.rating)
      if (v >= -0.3) {
        return 'ion-ios-star'
      } else if (v >= -0.5) {
        return 'ion-ios-star-half'
      }
      return 'ion-ios-star-outline'
    }
  }
}
</script>

<style>
  .rating-indicator {
    font-size: 2rem;
    color: #888;
    display: inline-block;
    text-align: center;
  }
</style>
