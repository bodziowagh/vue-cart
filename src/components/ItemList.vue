<template>
  <div class="item-list row">
    <h1>{{ header }}</h1>

    <div v-if="!items.length">
      The list is empty
    </div>

    <div v-if="loading">
      Loading...
    </div>

    <div class="item-container col-xs-12 col-sm-4" v-for="item in items">
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
    data() {
      return {
        header: 'Item list',
        onSelectCallback: (item) => {
          const selectedItem = item;

          selectedItem.selected = !item.selected;
        },
      };
    },
    props: {
      items: {
        type: Array,
        default: [],
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }

  .item-list {

  }

  .item-list .item-container {
    display: inline-block;
    padding: 10px 20px;
  }
</style>
