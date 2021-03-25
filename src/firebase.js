import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxK9srx9rI5aXks8e_Dq_TimYyrQuLVLE",
  authDomain: "mern-discord-297f9.firebaseapp.com",
  projectId: "mern-discord-297f9",
  storageBucket: "mern-discord-297f9.appspot.com",
  messagingSenderId: "232641892388",
  appId: "1:232641892388:web:337468c4c8a295429d08b1",
  measurementId: "G-NPC7E0RZH8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
