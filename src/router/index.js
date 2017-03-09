import Vue from 'vue';
import Router from 'vue-router';

import ItemListSection from '@/sections/ItemListSection';
import ItemCartSection from '@/sections/ItemCartSection';
import HomepageSection from '@/sections/HomepageSection';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomepageSection',
      component: HomepageSection,
    }, {
      path: '/item-list',
      name: 'Item List',
      component: ItemListSection,
    }, {
      path: '/item-cart',
      name: 'Item Cart',
      component: ItemCartSection,
    },
  ],
});
