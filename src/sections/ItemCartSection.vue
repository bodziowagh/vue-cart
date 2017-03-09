<template>
  <div class="item-cart">
    <h1>Your items:</h1>

    <item-list />
  </div>
</template>

<script>
  import ItemList from '@/components/ItemList';

  export default {
    name: 'item-cart',
    components: {
      'item-list': ItemList,
    },
  };
</script>

<style scoped>
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
</style>
