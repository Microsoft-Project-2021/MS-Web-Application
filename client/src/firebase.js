// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import {getFirestore, } from "firebase/firestore";
import {getDatabase, } from "firebase/database";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3trlf_jLcVVF2GcsBz8FQUuKCYa-x2Zc",
  authDomain: "ms-project-12878.firebaseapp.com",
  projectId: "ms-project-12878",
  storageBucket: "ms-project-12878.appspot.com",
  messagingSenderId: "9238125874",
  appId: "1:9238125874:web:deedcb099ad4e4facd8b2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const app2 = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fire = getFirestore(app);
export const db = getDatabase(app);
export const auth2 = firebase.auth;
export const db2 = app2.database;
export const fire2 = app2.firestore;
