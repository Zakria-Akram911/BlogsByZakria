import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi6cHrKbRRn8KWM2DQVOwCmRGyOUYK9Rk",
  authDomain: "my-blogs-app-9c90f.firebaseapp.com",
  projectId: "my-blogs-app-9c90f",
  storageBucket: "my-blogs-app-9c90f.appspot.com",
  messagingSenderId: "1071935586401",
  appId: "1:1071935586401:web:f9da6cc0a37ac243ebaa20",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
