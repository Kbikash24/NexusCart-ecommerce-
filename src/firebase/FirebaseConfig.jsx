// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFTQIgW8u41JoOM19hWA6uX_wBjXmCjYo",
  authDomain: "ecommerce-pro-6590c.firebaseapp.com",
  projectId: "ecommerce-pro-6590c",
  storageBucket: "ecommerce-pro-6590c.appspot.com",
  messagingSenderId: "575902707787",
  appId: "1:575902707787:web:fc64173e60575229349dce",
  measurementId: "G-H3YDPVJSTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB=getFirestore(app)
const auth=getAuth(app)
export{fireDB,auth}
