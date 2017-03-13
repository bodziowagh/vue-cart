<template>
  <div class='item-cart'>
    <h1>Your items:</h1>

    <item-list
      v-bind:loading="loading"
      v-bind:items="items"
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
    }),
    firebase: {
      items: itemsRef.orderByChild('selected').equalTo(true),
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
</style>
