import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBWBMSPKscmb-ZPiyj1TDm-fgRiRuKCBSw",
  authDomain: "test-app-80bf9.firebaseapp.com",
  projectId: "test-app-80bf9",
  storageBucket: "test-app-80bf9.appspot.com",
  messagingSenderId: "51408366537",
  appId: "1:51408366537:web:d242ddf3f820ee49f9d618",
  measurementId: "G-D6BTG75YH9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app); 
