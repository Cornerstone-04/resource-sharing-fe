import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoSgGhp5fuRQaQJZKzkiwDMolBZ2sLCnE",
  authDomain: "kawehub-b0734.firebaseapp.com",
  projectId: "kawehub-b0734",
  storageBucket: "kawehub-b0734.firebasestorage.app",
  messagingSenderId: "666693855256",
  appId: "1:666693855256:web:8c512354dc3173be077b6d",
  measurementId: "G-H8MK1NQ9BH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
