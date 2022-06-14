import firebase from '@react-native-firebase/app';
import  '@react-native-firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAd8gKDrURAToZwT5OXfTTeN43sS7qDAqc",
  authDomain: "de-ansclothing.firebaseapp.com",
  databaseURL: "https://de-ansclothing.firebaseio.com",
  projectId: "de-ansclothing",
  storageBucket: "de-ansclothing.appspot.com",
  messagingSenderId: "1072371586809",
  appId: "1:1072371586809:web:191da603c5452aef337428",
  measurementId: "G-62HXN24BBN"
};
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;