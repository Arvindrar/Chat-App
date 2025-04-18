// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-88c51.firebaseapp.com",
  projectId: "react-chat-88c51",
  storageBucket: "react-chat-88c51.firebasestorage.app",
  messagingSenderId: "367940503683",
  appId: "1:367940503683:web:1bbbc47d865ddc714533b6",
  measurementId: "G-F42L5JYV5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
//export const storage = getStorage();
