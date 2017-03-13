<template>
  <div class="item-list-section">
    <h1>Please select items from the list below:</h1>

    <item-list
    v-bind:loading="loading"
      v-bind:items="items"
      v-bind:onSelectCallback="onSelectCallback"
    />
  </div>
</template>

<script>
  import ItemList from '@/components/ItemList';
  import database from '@/services/FirebaseService';

  const itemsRef = database.ref('items');

  export default {
    name: 'item-cart',
    components: {
      'item-list': ItemList,
    },
    data: () => ({
      loading: true,
      onSelectCallback: (item) => {
        itemsRef.child(item['.key']).update({
          selected: !item.selected,
        });
      },
    }),
    firebase: {
      items: itemsRef,
    },
    mounted: function mounted() {
      itemsRef.once('value', () => {
        this.loading = false;
      });
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

  .actions button:disabled {
    cursor: default;
    opacity: 0.7;
  }
</style>
