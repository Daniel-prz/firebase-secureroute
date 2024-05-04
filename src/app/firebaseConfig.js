// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJi_8qbF4DUwEKAFWkswtpdZ6on96iHIs",
  authDomain: "fir-route-8963b.firebaseapp.com",
  projectId: "fir-route-8963b",
  storageBucket: "fir-route-8963b.appspot.com",
  messagingSenderId: "1023675900047",
  appId: "1:1023675900047:web:94d3e2a9e5917cbce790fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, provider };
