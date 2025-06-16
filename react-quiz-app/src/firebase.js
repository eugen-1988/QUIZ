import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1yahiJxZ9j52LfDIzfVa1nVle0yb3498",
  authDomain: "react-quiz-auth.firebaseapp.com",
  projectId: "react-quiz-auth",
  storageBucket: "react-quiz-auth.appspot.com",
  messagingSenderId: "104121196373",
  appId: "1:104121196373:web:f98b7c40979ab23242d9dc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
