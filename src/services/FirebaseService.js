import Firebase from 'firebase';
import config from '../config/config';


export default {
  getRefs: () => {
    const database = Firebase.initializeApp(config.firebase).database();
    const itemsRef = database.ref('items');

    return {
      items: itemsRef,
    };
  },
};
