import Firebase from 'firebase';
import config from '../config/config';

const database = Firebase.initializeApp(config.firebase).database();

export default database;
