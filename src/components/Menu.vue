<template>
  <div class="menu">
    <router-link to="/item-list" class="tab">Item List</router-link>
    <router-link to="/item-cart" class="tab">Item Cart</router-link>
  </div>
</template>

<script>
  export default {
    name: 'menu',
  };
</script>

<style scoped>
  .menu {
    padding: 50px 0;
  }

  .menu .tab {
    background-color: #ddd;
    color: #000;
    text-decoration: none;
    display: inline-block;
    width: 49%;
    line-height: 50px;
    font-size: 26px;

    transition: 500ms;
  }

  .menu .tab:hover {
    background-color: #bbb;

    transition: 500ms;
  }

</style>
