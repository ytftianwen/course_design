<template>
  <div>
    <nature-map></nature-map>
  </div>
</template>

<script>
  import natureMap from './map/view.vue'
  export default {
    components: {
      natureMap
    },
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    color: #fff;
  }
</style>
