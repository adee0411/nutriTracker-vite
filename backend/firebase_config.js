// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx1Ennl6lnJc2Cdf1N2puVdKwpQWzdhFE",
  authDomain: "nutritracker-v2.firebaseapp.com",
  projectId: "nutritracker-v2",
  storageBucket: "nutritracker-v2.firebasestorage.app",
  messagingSenderId: "839541553511",
  appId: "1:839541553511:web:247085aaaeae8b4ee757c2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
