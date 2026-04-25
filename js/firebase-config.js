/**
 * Firebase Configuration
 * Real project config for emmanualholycommunion
 */
const firebaseConfig = {
  apiKey: "AIzaSyD8vHet_aNoSVQvH0LZvde4yz_sxJHqppA",
  authDomain: "emmanualholycommunion.firebaseapp.com",
  projectId: "emmanualholycommunion",
  storageBucket: "emmanualholycommunion.firebasestorage.app",
  messagingSenderId: "780599752949",
  appId: "1:780599752949:web:b78e08d031f005d01b6dbc",
  measurementId: "G-M9HSFKYE6P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

