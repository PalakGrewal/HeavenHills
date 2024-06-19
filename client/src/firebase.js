// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "heavenhills-app1.firebaseapp.com",
  projectId: "heavenhills-app1",
  storageBucket: "heavenhills-app1.appspot.com",
  messagingSenderId: "800478809174",
  appId: "1:800478809174:web:f4173ea6375077043a7ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);