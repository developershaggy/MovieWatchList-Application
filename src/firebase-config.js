// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFwY3aTLR6fWfkvPh4m-Gl7v07Lt_02lg",
  authDomain: "moviewatchlist-application.firebaseapp.com",
  projectId: "moviewatchlist-application",
  storageBucket: "moviewatchlist-application.appspot.com",
  messagingSenderId: "550434205461",
  appId: "1:550434205461:web:3063dc2f4772485f66c31c",
  measurementId: "G-R4VLPPMZ66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;