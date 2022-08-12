
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyCJchCRxGHxKqCR_L9GJJKXb2WK6x46_l8",
  
    authDomain: "authentication-journey.firebaseapp.com",
  
    projectId: "authentication-journey",
  
    storageBucket: "authentication-journey.appspot.com",
  
    messagingSenderId: "455732848557",
  
    appId: "1:455732848557:web:a0a3e69aa5c727b5652324",
  
    measurementId: "G-DVSDJ2EM5X"
  
  };

  
  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)