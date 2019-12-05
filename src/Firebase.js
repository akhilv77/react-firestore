import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAsfXVJwBT4mradrjdZYr4t-vBir8PoZV4",
  authDomain: "fir-sample-project-7ae01.firebaseapp.com",
  databaseURL: "https://fir-sample-project-7ae01.firebaseio.com",
  projectId:"fir-sample-project-7ae01",
  storageBucket: "fir-sample-project-7ae01.appspot.com",
  messagingSenderId:"362478072510",
  appId: "1:362478072510:web:6e9bfb5662410b59f164ef",
  measurementId: "G-3D1Z5G3L2C"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;