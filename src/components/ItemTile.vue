<template>
  <div class="item-tile">
    <div class="name" v-text="item.name" />
    <div class="image-container">
      <img v-bind:src="item.image" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item-tile',
    props: {
      item: {
        type: Object,
        default: () => ({
          name: '',
          image: '',
        }),
      },
    },
  };
</script>

<style scoped>
  .item-tile {
    background-color: #ddd;
    display: inline-block;
    padding: 10px;
    width: 200px;

    transition: 500ms;
  }

  .item-tile:hover {
    background-color: #aaa;
    transition: 500ms;
  }

  .name {
    background-color: #eee;
    font-size: 24px;
    font-weight: bold;
    line-height: 50px;
    width: 100%;
  }

  .image-container {
    padding-top: 10px;
  }

  .image-container img {
    width: 100%;
  }
</style>
