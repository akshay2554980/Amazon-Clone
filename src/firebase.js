import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyA-Hd9RnnAlaA77uoIlBdgAE_DLnJkPMtk",
    authDomain: "website-8c1c1.firebaseapp.com",
    projectId: "website-8c1c1",
    storageBucket: "website-8c1c1.appspot.com",
    messagingSenderId: "1027042802992",
    appId: "1:1027042802992:web:f530d92a488bf0f121dcf5",
    measurementId: "G-P2JG4F1VQR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const db=firebase.firestore();
  export {db};