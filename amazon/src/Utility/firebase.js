// Import Firebase modules from the modular SDK
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuhXgBkSkFLlBi3jfmimgjI4cbH7_gO70",
  authDomain: "clone-b45c1.firebaseapp.com",
  projectId: "clone-b45c1",
  storageBucket: "clone-b45c1.appspot.com",
  messagingSenderId: "413841318933",
  appId: "1:413841318933:web:c30b2add782c5abe529a1c",
};

// Initialize Firebase app (only if no app is already initialized)
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
