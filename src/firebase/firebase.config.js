// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDma8D_KtSdaywa6iVari9jLVmMjo2EMc8",
  authDomain: "the-dragon-news-project-813ab.firebaseapp.com",
  projectId: "the-dragon-news-project-813ab",
  storageBucket: "the-dragon-news-project-813ab.appspot.com",
  messagingSenderId: "525685483060",
  appId: "1:525685483060:web:8a7ae7c2698ae316808c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;