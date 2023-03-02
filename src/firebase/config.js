import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyA4rH1u6baW682_VOAgzTeR149d77xlacA",
  authDomain: "react-bootcamp-aa7ae.firebaseapp.com",
  projectId: "react-bootcamp-aa7ae",
  storageBucket: "react-bootcamp-aa7ae.appspot.com",
  messagingSenderId: "681192743343",
  appId: "1:681192743343:web:d1e2d01ac54b42ed0acf5a"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);