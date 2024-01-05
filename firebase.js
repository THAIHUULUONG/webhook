// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZExKQZtgJdRo2wmIhWbBancM4JY7-VU",
  authDomain: "webhook-24612.firebaseapp.com",
  databaseURL: "https://webhook-24612-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webhook-24612",
  storageBucket: "webhook-24612.appspot.com",
  messagingSenderId: "400672956398",
  appId: "1:400672956398:web:13c88955ac2d2c2eaaf8ff",
  measurementId: "G-1KMFW1RZYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);