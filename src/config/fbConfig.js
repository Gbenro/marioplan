import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPETWzlWtmQG7nK6kxKBNHpxziKNVffMY",
    authDomain: "marioplan-6b366.firebaseapp.com",
    databaseURL: "https://marioplan-6b366.firebaseio.com",
    projectId: "marioplan-6b366",
    storageBucket: "marioplan-6b366.appspot.com",
    messagingSenderId: "681022325742"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true });


  export default firebase;
