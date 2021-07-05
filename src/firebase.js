// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBSYHdnO8hUqvBgvd2r5NXhJKDBKdWxSxU',
  authDomain: 'facebook-clone-79d32.firebaseapp.com',
  projectId: 'facebook-clone-79d32',
  storageBucket: 'facebook-clone-79d32.appspot.com',
  messagingSenderId: '851895392091',
  appId: '1:851895392091:web:abcfdd1d6eead6a9fa2c7e',
  measurementId: 'G-RJ6NNJB3HF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
