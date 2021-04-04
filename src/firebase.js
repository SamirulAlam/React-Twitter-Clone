import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCi3Yd3r8bWQdq2A_prE96ywd4N-3quSrI",
    authDomain: "twitter-clone-aaf22.firebaseapp.com",
    projectId: "twitter-clone-aaf22",
    storageBucket: "twitter-clone-aaf22.appspot.com",
    messagingSenderId: "270527204999",
    appId: "1:270527204999:web:dfee2fa56590f606ef7222",
    measurementId: "G-7LGMKYM93R"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;