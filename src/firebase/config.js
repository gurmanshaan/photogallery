import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyBgn0U-0wkoD2xMxxjJQUp6fR166p8lIJE",
    authDomain: "gurmanshaan-firegram.firebaseapp.com",
    projectId: "gurmanshaan-firegram",
    storageBucket: "gurmanshaan-firegram.appspot.com",
    messagingSenderId: "170484410661",
    appId: "1:170484410661:web:66e4b9c1419f3339ab52cc"
});


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = app.auth();

export { projectStorage, projectFirestore, timeStamp, auth };
