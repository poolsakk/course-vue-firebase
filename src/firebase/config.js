import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBV9R8RI96pJ_nrrNg5e1hfoLotucygbAc",
    authDomain: "udemy-vue-firebase-sites-7de63.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-7de63",
    storageBucket: "udemy-vue-firebase-sites-7de63.appspot.com",
    messagingSenderId: "446125025580",
    appId: "1:446125025580:web:6dd903bed76ae76625e489"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }