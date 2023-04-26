// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxlIRat2sVX2n6EbwDWicH-UBcys6m7FI",
  authDomain: "the-dragon-news-client-255c4.firebaseapp.com",
  projectId: "the-dragon-news-client-255c4",
  storageBucket: "the-dragon-news-client-255c4.appspot.com",
  messagingSenderId: "894527214517",
  appId: "1:894527214517:web:2328e9b6bed2a1b96a7ffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;