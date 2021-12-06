
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyD3trlf_jLcVVF2GcsBz8FQUuKCYa-x2Zc",
  authDomain: "ms-project-12878.firebaseapp.com",
  projectId: "ms-project-12878",
  storageBucket: "ms-project-12878.appspot.com",
  messagingSenderId: "9238125874",
  appId: "1:9238125874:web:deedcb099ad4e4facd8b2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);