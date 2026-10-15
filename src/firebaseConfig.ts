// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxus6a0HwzQf9PWMi3_kXwo5kF2yDCvVM",
  authDomain: "aws-builder-group-itb.firebaseapp.com",
  projectId: "aws-builder-group-itb",
  storageBucket: "aws-builder-group-itb.firebasestorage.app",
  messagingSenderId: "880786296990",
  appId: "1:880786296990:web:35e5ec64e344d8f546eb8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos los servicios para usarlos en la aplicación
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
