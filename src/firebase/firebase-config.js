import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCfe8gFLmPoUJ2O7rJScSwJ28DqYg2YYdc",
    authDomain: "journal-app-3e784.firebaseapp.com",
    projectId: "journal-app-3e784",
    storageBucket: "journal-app-3e784.appspot.com",
    messagingSenderId: "198575973293",
    appId: "1:198575973293:web:f128ebd8c073a9d0b13724"
  };
  
  
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore(); //DB + referencia a firestore
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //autenticacion with google

  export{
      db, 
      googleAuthProvider,
      firebase
  }