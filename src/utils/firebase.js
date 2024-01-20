// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqvTmA6V4brAZdSbY0PjdCsPKLbZouE_0",
  authDomain: "netflixgpt-16dbd.firebaseapp.com",
  projectId: "netflixgpt-16dbd",
  storageBucket: "netflixgpt-16dbd.appspot.com",
  messagingSenderId: "438082955094",
  appId: "1:438082955094:web:ebd22069e51fb6af7c58f7",
  measurementId: "G-8Y3FVEZVJ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
