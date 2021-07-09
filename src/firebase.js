import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyB-xGimYaHq99HwCb_XEf9WXjOCjEZdBN8",
  authDomain: "clone-eed10.firebaseapp.com",
  projectId: "clone-eed10",
  storageBucket: "clone-eed10.appspot.com",
  messagingSenderId: "913009931899",
  appId: "1:913009931899:web:e52b2a464f45d2af3694de",
  measurementId: "G-7ZNK5DS2KS"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const db=firebase.firestore();
  export {db};