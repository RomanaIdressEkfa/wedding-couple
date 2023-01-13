// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwp_jP6pYEo7CqXkhc9o3j23NI30ESdlQ",
    authDomain: "wedding-hall-f9202.firebaseapp.com",
    projectId: "wedding-hall-f9202",
    storageBucket: "wedding-hall-f9202.appspot.com",
    messagingSenderId: "235358657731",
    appId: "1:235358657731:web:21f24ecb3af6e3da259676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;