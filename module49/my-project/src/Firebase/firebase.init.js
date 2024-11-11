// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLAriAyvZJ_fNLDyfpRSl5geZoMP5OUkA",
  authDomain: "email-password-auth-e82f5.firebaseapp.com",
  projectId: "email-password-auth-e82f5",
  storageBucket: "email-password-auth-e82f5.firebasestorage.app",
  messagingSenderId: "528096246617",
  appId: "1:528096246617:web:fb07458c2883379e8baa48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);