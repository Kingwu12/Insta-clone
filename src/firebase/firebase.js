
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOveMCOY7OZCa67Dl7ODx_IuGIm19N9dY",
  authDomain: "insta-clone-5bfe2.firebaseapp.com",
  projectId: "insta-clone-5bfe2",
  storageBucket: "insta-clone-5bfe2.appspot.com",
  messagingSenderId: "422159585786",
  appId: "1:422159585786:web:92736d1f4b52785ddb5443",
  measurementId: "G-W98SNM25V7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };