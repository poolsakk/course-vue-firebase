import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV9R8RI96pJ_nrrNg5e1hfoLotucygbAc",
    authDomain: "udemy-vue-firebase-sites-7de63.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-7de63",
    storageBucket: "udemy-vue-firebase-sites-7de63.appspot.com",
    messagingSenderId: "446125025580",
    appId: "1:446125025580:web:5b6ce68adc187cd825e489"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }