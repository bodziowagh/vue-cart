<template>
  <div class="item-list row">
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="!loading && !items.length">
      The list is empty
    </div>

    <div v-if="!loading" class="item-container col-xs-12 col-sm-4" v-for="item in items">
      <item-tile
        v-bind:item="item"
        v-bind:onSelectCallback="onSelectCallback"
      />
    </div>
  </div>
</template>

<script>
  import ItemTile from './ItemTile';

  export default {
    name: 'item-list',
    components: {
      'item-tile': ItemTile,
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      items: {
        type: Array,
        default: [],
      },
      onSelectCallback: {
        type: Function,
        default: null,
      },
    },
  };
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }

  .item-list .item-container {
    display: inline-block;
    padding: 10px 20px;
  }
</style>
