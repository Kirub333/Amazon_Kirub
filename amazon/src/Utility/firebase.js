// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuhXgBkSkFLlBi3jfmimgjI4cbH7_gO70",
  authDomain: "clone-b45c1.firebaseapp.com",
  projectId: "clone-b45c1",
  storageBucket: "clone-b45c1.firebasestorage.app",
  messagingSenderId: "413841318933",
  appId: "1:413841318933:web:c30b2add782c5abe529a1c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
