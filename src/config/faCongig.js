import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFVlwlaXDtPhJweiMVebKyIfIKB4j0r_U",
    authDomain: "travel-planning-974f5.firebaseapp.com",
    databaseURL: "https://travel-planning-974f5.firebaseio.com",
    projectId: "travel-planning-974f5",
    storageBucket: "travel-planning-974f5.appspot.com",
    messagingSenderId: "864684342775",
    appId: "1:864684342775:web:c8fe9d321d708520"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;