// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJz742oN9jMfenj4VJJQ9fezSt13XhS88",
  authDomain: "netfligpt-ae73c.firebaseapp.com",
  projectId: "netfligpt-ae73c",
  storageBucket: "netfligpt-ae73c.appspot.com",
  messagingSenderId: "911562656772",
  appId: "1:911562656772:web:252e0eea77a90e669bf951",
  measurementId: "G-RXBERQMCWQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
