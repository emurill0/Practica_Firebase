// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/getFirestore";
import {getStorage} from 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBYRwKH_qRO6Oim_LC-BpxsXv0eejh16Q",
  authDomain: "practica-firebase-20220021.firebaseapp.com",
  projectId: "practica-firebase-20220021",
  storageBucket: "practica-firebase-20220021.appspot.com",
  messagingSenderId: "603970761082",
  appId: "1:603970761082:web:3793b2bf53ab102cffe6c3"
};
console.log("Valor de configuración", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}

export { database,storage };