<template>
  <div id="app" class="container">
    <header-menu />

    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'app',
  components: {
    'header-menu': Menu,
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
