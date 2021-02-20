import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbw_yi3h4zYhj0rEShAhfK85e97WIQfFQ",
    authDomain: "rhythm-brickhack.firebaseapp.com",
    projectId: "rhythm-brickhack",
    storageBucket: "rhythm-brickhack.appspot.com",
    messagingSenderId: "129723530981",
    appId: "1:129723530981:web:066bd2fe685a7718969e0c",
    measurementId: "G-NB2ST2D56L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
  export default database;