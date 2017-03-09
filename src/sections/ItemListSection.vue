<template>
  <div class="item-list-section">
    <h1>Please select items from the list below:</h1>
    <item-list v-bind:items="items" v-bind:loading="false" />

    <div class="actions">
      <button
        class="submit-button"
        v-bind:disabled="isSubmitDisabled"
        v-on:click="() => submitItems(items)"
      >
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
    data() {
      return {
        items: [
          {
            selected: false,
            name: 'My item 1',
            image: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
          }, {
            selected: false,
            name: 'My item 2',
            image: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
          }, {
            selected: false,
            name: 'My item 3',
            image: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/shop6.jpg',
          }, {
            selected: false,
            name: 'My item 4',
            image: 'https://assets.rbl.ms/4314213/980x.jpg',
          }, {
            selected: false,
            name: 'My item 5',
            image: 'https://i.ytimg.com/vi/lUaNo_L7AKU/hqdefault.jpg',
          },
        ],
      };
    },
    methods: {
      submitItems: (items) => {
        // TODO

        console.log(items.filter(item => item.selected));
      },
    },
    computed: {
      isSubmitDisabled: function () {
        return !this.items.filter(item => item.selected).length;
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

  .actions button:disabled {
    cursor: default;
    opacity: 0.7;
  }
</style>
