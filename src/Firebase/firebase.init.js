// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApKeksu-KbweRhNPBWgGhn4m3iM5Taz80",
    authDomain: "simple-firebase-c9feb.firebaseapp.com",
    projectId: "simple-firebase-c9feb",
    storageBucket: "simple-firebase-c9feb.appspot.com",
    messagingSenderId: "299299660532",
    appId: "1:299299660532:web:1d1c82f4f6f4265fecf4a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;