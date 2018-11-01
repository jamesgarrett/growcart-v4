import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQ72rEMOTrCweZN4baRtxh5oGHjpz7Wj8",
    authDomain: "growcart-v2.firebaseapp.com",
    databaseURL: "https://growcart-v2.firebaseio.com",
    projectId: "growcart-v2",
    storageBucket: "growcart-v2.appspot.com",
    messagingSenderId: "664443951167"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;