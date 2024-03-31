// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8-GKbKUXgACASXIMRoZwfgxAxLN9ZDNc",
    authDomain: "user-authentication-c0902.firebaseapp.com",
    projectId: "user-authentication-c0902",
    storageBucket: "user-authentication-c0902.appspot.com",
    messagingSenderId: "56790375407",
    appId: "1:56790375407:web:587b19be820d430331f41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// export default app;