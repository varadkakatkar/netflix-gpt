// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn96oTPNMDCURcQ3f3sOBnkVef688DvQs",
  authDomain: "netflixgpt-f8523.firebaseapp.com",
  projectId: "netflixgpt-f8523",
  storageBucket: "netflixgpt-f8523.firebasestorage.app",
  messagingSenderId: "234525330045",
  appId: "1:234525330045:web:32a452b638cb9797f97f14",
  measurementId: "G-12KXWB0TR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();