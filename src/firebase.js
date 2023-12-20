import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAxA7w0qyjWX7jFx2ee_ppfxPSLjIPHxg",
  authDomain: "blog-ba4f6.firebaseapp.com",
  projectId: "blog-ba4f6",
  storageBucket: "blog-ba4f6.appspot.com",
  messagingSenderId: "556587166867",
  appId: "1:556587166867:web:d05e7936cd985bd269f166"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };