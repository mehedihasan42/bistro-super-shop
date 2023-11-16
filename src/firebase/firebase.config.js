// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgWsrCL8niTADjAKpPCrc6pjKbPpRAPGg",
  authDomain: "bistro-super.firebaseapp.com",
  projectId: "bistro-super",
  storageBucket: "bistro-super.appspot.com",
  messagingSenderId: "985994970444",
  appId: "1:985994970444:web:66f9780f0e5183b36a3be9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;