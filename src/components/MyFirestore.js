import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// These IDs are okay to include in version control, according to the firebase docs:
// https://firebase.google.com/docs/projects/api-keys#api-keys-for-firebase-are-different
const firebaseConfig = {
    apiKey: "AIzaSyB-EUdfG6jOu6OKFLOLSO6zBSWtF9GccyE",
    authDomain: "doug-personal-website.firebaseapp.com",
    projectId: "doug-personal-website",
    storageBucket: "doug-personal-website.appspot.com",
    messagingSenderId: "151463659350",
    appId: "1:151463659350:web:70f514a8e4f82ada2538f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;