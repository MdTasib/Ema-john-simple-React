// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCwLivtItkeM41hRgtm3X7wRDhqDcYcUYE",
	authDomain: "ema-jhon-simple-b6d2b.firebaseapp.com",
	projectId: "ema-jhon-simple-b6d2b",
	storageBucket: "ema-jhon-simple-b6d2b.appspot.com",
	messagingSenderId: "636711730775",
	appId: "1:636711730775:web:3e308d0fcfec2ca9afed12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
