import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDezG9EtLWWjQkuGzfC7b45ta7FiXdtMAA",
  authDomain: "opt-verification-7d487.firebaseapp.com",
  databaseURL: "https://opt-verification-7d487-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "opt-verification-7d487",
  storageBucket: "opt-verification-7d487.appspot.com",
  messagingSenderId: "550800403477",
  appId: "1:550800403477:web:78fbd5a95859de4b06b21c",
  measurementId: "G-YR6TSRDF9H"
};

// Initialize Firebase
// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase;
// Use these for db & auth
export const db = firebaseApp.firestore();
const auth = firebase.auth();

export {firebaseApp, auth};