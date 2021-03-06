import Vue from 'vue';
import VueFire from 'vuefire';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
