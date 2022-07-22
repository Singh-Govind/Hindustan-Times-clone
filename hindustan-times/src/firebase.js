// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNkmO7Zus1UNDsAUUtdHmqPT_pgwvdIkE",
  authDomain: "hindustan-times-clone.firebaseapp.com",
  projectId: "hindustan-times-clone",
  storageBucket: "hindustan-times-clone.appspot.com",
  messagingSenderId: "1036684375252",
  appId: "1:1036684375252:web:030f00b9bfc4ca98cb3741",
  measurementId: "G-5FEG1DH5GE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
