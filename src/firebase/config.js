import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDyJjenehHC2kKIxqMjnGMKp79MujzXJzU",
  authDomain: "pictogram-1ea15.firebaseapp.com",
  projectId: "pictogram-1ea15",
  storageBucket: "pictogram-1ea15.appspot.com",
  messagingSenderId: "883871036140",
  appId: "1:883871036140:web:863d7d221135b80cc92bc9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Storage
const projectStorage = firebase.storage()

// Initialize Firebase Firestore
const projectFirestore = firebase.firestore()

// Initialize Firebase Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }