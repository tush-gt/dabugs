
import {getDatabase} from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Bmo3LvsM_GyCC6F4XcNb-YZ5Hurlr6o",
  authDomain: "dabugs-82e66.firebaseapp.com",
  databaseURL: "https://dabugs-82e66-default-rtdb.firebaseio.com",
  projectId: "dabugs-82e66",
  storageBucket: "dabugs-82e66.firebasestorage.app",
  messagingSenderId: "927445066728",
  appId: "1:927445066728:web:63ff3d2f23b40934d8fa5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
export default db;