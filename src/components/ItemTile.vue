<template>
  <div
    class="item-tile"
    v-bind:class="{ 'selected': item.selected }"
    v-on:click="() => onSelect(item)"
  >
    <div class="name" v-text="item.name" />
    <div class="image-container">
      <img v-bind:src="item.image" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item-tile',
    methods: {
      onSelect: function onSelect() {
        if (this.onSelectCallback) {
          this.onSelectCallback(this.item);
        }
      },
    },
    props: {
      item: {
        type: Object,
      },
      onSelectCallback: {
        type: Function,
      },
    },
  };
</script>

<style scoped>
  .item-tile {
    background-color: #ddd;
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    max-width: 280px;
    opacity: 0.7;

    transition: 500ms;
  }

  .item-tile:hover {
    background-color: #aaa;
    opacity: 1;

    transition: 500ms;
  }

  .selected {
    background-color: #aaa;
    opacity: 1;
  }

  .item-tile .name {
    background-color: #eee;
    font-size: 24px;
    font-weight: bold;
    line-height: 50px;
    width: 100%;
  }

  .item-tile .image-container {
    padding-top: 10px;
    height: 150px;
  }

  .item-tile  .image-container img {
    width: 100%;
    height: 100%;
  }
</style>
