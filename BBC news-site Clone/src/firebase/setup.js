// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAsLyXsNLyi0U-SoUlFhUzgQJaYenbuVGs",
  authDomain: "bbc-clone-1227b.firebaseapp.com",
  projectId: "bbc-clone-1227b",
  storageBucket: "bbc-clone-1227b.appspot.com",
  messagingSenderId: "73930595236",
  appId: "1:73930595236:web:cca7fe74f30385c43dff31"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider(app);
export const database=getFirestore(app);
