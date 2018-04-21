import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAVw3Y-GkWb89molaB3AA57NReVMXxHSU",
  authDomain: "veganista-9a5b1.firebaseapp.com",
  databaseURL: "https://veganista-9a5b1.firebaseio.com",
});

// creating the Rebase binding
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
