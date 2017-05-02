<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/index'
export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    margin: 0;
    padding: 0;
    height:100%;
  }
</style>
