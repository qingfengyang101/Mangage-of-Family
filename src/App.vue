<template>
  <div id="app">
    <!--
        keep let this is compoent of sure extist.
        you can pass to router meta keywords to keep-alive.
        to keep cache.
      -->
        <router-view
        >
        </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.router-link-exact-active{
  color: #2196f3;
}
</style>
