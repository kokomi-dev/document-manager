import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

import firebaseConfig from "../../utils/FirebaseConfig";
import { getDatabase } from "firebase/database";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const db = firebase.firestore();
const database = getDatabase();
const storage = firebase.storage();
const storageRef = storage.ref();
const auth = firebase.auth();
// add file to firestore databse

export { db, database, storage, storageRef, auth };
export default firebase;
