<template>
  <div class="item-list-section">
    <h1>Please select items from the list below:</h1>
    <item-list />

    <div class="actions">
      <button class="submit-button" v-on:click="submitItems">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
  import ItemList from '@/components/ItemList';

  export default {
    name: 'item-cart',
    components: {
      'item-list': ItemList,
    },
    methods: {
      submitItems: () => {
        // TODO
      },
    },
  };
</script>

<style scoped>
  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  .actions {
    background-color: #ddd;
    position: absolute;
    bottom: 0;
    width: 99%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }

  .actions button {
    border: none;
    float: right;
    background-color: #bbb;
    cursor: pointer;
    font-size: 28px;
    padding: 20px 60px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;

    transition: 500ms;
  }

  .actions button:hover {
    background-color: #ccc;

    transition: 500ms;
  }

  .actions button:active {
    background-color: #999;

    transition: none;
  }
</style>
