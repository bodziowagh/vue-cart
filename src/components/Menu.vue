<template>
  <div class="menu row">
    <router-link to="/item-list" class="tab col-xs-12 col-sm-6">
      Item List
    </router-link>
    <router-link to="/item-cart" class="tab col-xs-12 col-sm-6">
      Item Cart
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'menu',
  };
</script>

<style scoped>
  .menu {
    background-color: #ddd;
  }

  .menu .tab {
    background-color: #ccc;
    border: solid 1px #bbb;
    color: #000;
    padding: 15px 0;
    text-decoration: none;
    display: inline-block;
    line-height: 50px;
    font-size: 26px;

    transition: 500ms;
  }

  .router-link-active {
    font-weight: bold;
  }

  .menu .tab:hover {
    background-color: #bbb;

    transition: 500ms;
  }

</style>
