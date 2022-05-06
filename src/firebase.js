// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwzznvB-TziREwap4rsnfTYBe9ZqBl-4c",
  authDomain: "newcrud-664f0.firebaseapp.com",
  databaseURL: "https://newcrud-664f0-default-rtdb.firebaseio.com",
  projectId: "newcrud-664f0",
  storageBucket: "newcrud-664f0.appspot.com",
  messagingSenderId: "544566156524",
  appId: "1:544566156524:web:e25f45d830860898f859c9",
  measurementId: "G-K8GYT6QRW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);