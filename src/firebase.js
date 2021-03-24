import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZ3smBta_GOW7fzVy8qpBtzMk1qmary9k",
  authDomain: "jade-eb502.firebaseapp.com",
  projectId: "jade-eb502",
  storageBucket: "jade-eb502.appspot.com",
  messagingSenderId: "721679399426",
  appId: "1:721679399426:web:15b53923d1e5e488b1451b",
  measurementId: "G-RL1MY8YZT3"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
