import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA81JhJ0UIQF9BtZAyJGkRdWX9E2Gsy7EE",
  authDomain: "clone-81d17.firebaseapp.com",
  databaseURL: "https://clone-81d17.firebaseio.com",
  projectId: "clone-81d17",
  storageBucket: "clone-81d17.appspot.com",
  messagingSenderId: "935287167093",
  appId: "1:935287167093:web:5def0fbc4f7928178ac03c",
  measurementId: "G-CQ2KVC1HJD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };