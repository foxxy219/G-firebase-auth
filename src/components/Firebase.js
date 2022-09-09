// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjdHt1zPDzcz4FA_0rpHPgxxY3Bhfe5GQ",
  authDomain: "letchat-9a08f.firebaseapp.com",
  projectId: "letchat-9a08f",
  storageBucket: "letchat-9a08f.appspot.com",
  messagingSenderId: "853579952381",
  appId: "1:853579952381:web:203d58cb334cc5ca2c4e94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);