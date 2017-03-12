import Vue from 'vue';
import VueFire from 'vuefire';

import FirebaseService from './services/FirebaseService';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

Vue.use(VueFire);

const firebaseRefs = FirebaseService.getRefs();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  firebase: {
    items: firebaseRefs.items,
  },
});
