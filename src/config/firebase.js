// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-Zk2zNTfESZN49zeNNW4D-DJI5h-ucM",
  authDomain: "policrafts-website.firebaseapp.com",
  projectId: "policrafts-website",
  storageBucket: "policrafts-website.appspot.com",
  messagingSenderId: "864996950642",
  appId: "1:864996950642:web:7171a9e1ffbf510445f8eb",
  measurementId: "G-EHK10H74J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
