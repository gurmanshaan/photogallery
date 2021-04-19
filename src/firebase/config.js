import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgn0U-0wkoD2xMxxjJQUp6fR166p8lIJE",
    authDomain: "gurmanshaan-firegram.firebaseapp.com",
    projectId: "gurmanshaan-firegram",
    storageBucket: "gurmanshaan-firegram.appspot.com",
    messagingSenderId: "170484410661",
    appId: "1:170484410661:web:66e4b9c1419f3339ab52cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };