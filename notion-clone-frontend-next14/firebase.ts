// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3li631WxYE2n3bZ-hx4v1cEucuAuIuno",
  authDomain: "musa-notion-clone-ss.firebaseapp.com",
  databaseURL: "https://musa-notion-clone-ss-default-rtdb.firebaseio.com",
  projectId: "musa-notion-clone-ss",
  storageBucket: "musa-notion-clone-ss.firebasestorage.app",
  messagingSenderId: "107635410313",
  appId: "1:107635410313:web:ca19e7d47cd1492d624d58",
  measurementId: "G-5XRSR2Y89G",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);


export { db };
