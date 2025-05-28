import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-4ZY0SEiwwEywRbyQ3x5npbf-k6EBZ2g",
  authDomain: "kawehub.firebaseapp.com",
  projectId: "kawehub",
  storageBucket: "kawehub.firebasestorage.app",
  messagingSenderId: "383014589960",
  appId: "1:383014589960:web:e4c20768490e27843f23bd",
  measurementId: "G-2Q6SRK22NM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
