// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMTAGF8SbiF53x15VQXwI9mdiKvu7HL5E",
    authDomain: "authenticationexplorefirebase.firebaseapp.com",
    projectId: "authenticationexplorefirebase",
    storageBucket: "authenticationexplorefirebase.appspot.com",
    messagingSenderId: "66769197341",
    appId: "1:66769197341:web:0bd5d27d3dc660c24ee9f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;