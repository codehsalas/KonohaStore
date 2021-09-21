// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUb9x8-TTitySuOtI0gp6U7N6g1nYuljc",
  authDomain: "fir-react-coder.firebaseapp.com",
  projectId: "fir-react-coder",
  storageBucket: "fir-react-coder.appspot.com",
  messagingSenderId: "902450742536",
  appId: "1:902450742536:web:56495d49190abc8e3498bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
