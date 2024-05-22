// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe5K--kGQmqDnmlQ4IJ7CRTsoopYTmz5M",
  authDomain: "netflixgpt-779ad.firebaseapp.com",
  projectId: "netflixgpt-779ad",
  storageBucket: "netflixgpt-779ad.appspot.com",
  messagingSenderId: "437899428997",
  appId: "1:437899428997:web:0864549a6dbe30098f95ec",
  measurementId: "G-YXEH2YNGE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();