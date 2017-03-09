<template>
  <div class="menu">
    <router-link to="/item-list" class="tab">
      Item List
    </router-link>
    <router-link to="/item-cart" class="tab">
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
    color: #000;
    padding: 15px 0;
    text-decoration: none;
    display: inline-block;
    width: 49%;
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
