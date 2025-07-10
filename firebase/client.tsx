// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCHKV2c34htCWaJ0zCG8xzM210-eq7KugI",
  authDomain: "prepwise-35574.firebaseapp.com",
  projectId: "prepwise-35574",
  storageBucket: "prepwise-35574.firebasestorage.app",
  messagingSenderId: "387519140151",
  appId: "1:387519140151:web:5921369f78a4e152c84ab2",
  measurementId: "G-NB0GJ1Q5GX"
};



// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);