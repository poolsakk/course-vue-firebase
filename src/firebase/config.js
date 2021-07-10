import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBV32Qb4UatP4u_4AHlACfKW3wyGwJeOWg",
    authDomain: "muso-ninjas-a5c8c.firebaseapp.com",
    projectId: "muso-ninjas-a5c8c",
    storageBucket: "muso-ninjas-a5c8c.appspot.com",
    messagingSenderId: "650837357522",
    appId: "1:650837357522:web:411047339f908d64c20e0b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }