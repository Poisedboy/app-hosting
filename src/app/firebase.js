// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDAmw5BHAbqs-gOXLITot8k63t53nmIrWw",
	authDomain: "updated-opera-8ff48.firebaseapp.com",
	projectId: "updated-opera-8ff48",
	storageBucket: "updated-opera-8ff48.appspot.com",
	messagingSenderId: "482693625554",
	appId: "1:482693625554:web:a446923fa02da60d7c1f0b",
	measurementId: "G-D6B1V61XDE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
