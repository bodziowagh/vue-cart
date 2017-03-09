<template>
  <div class="item-list">
    <h1>{{ header }}</h1>

    <div class="item-container" v-for="item in items">
      <item-tile  v-bind:item="item" />
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
        items: [
          {
            name: 'My item 1',
            image: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
          }, {
            name: 'My item 2',
            image: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
          }, {
            name: 'My item 3',
            image: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
          }, {
            name: 'My item 4',
            image: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
          }, {
            name: 'My item 5',
            image: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
          },
        ],
      };
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
