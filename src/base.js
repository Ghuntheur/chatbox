import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDZsVDbBX03fHGbkGEntlYtD8r8bm6C_k8',
  authDomain: 'chatroom-835e9.firebaseapp.com',
  databaseURL: 'https://chatroom-835e9.firebaseio.com'
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
