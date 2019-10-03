import firebase from "firebase";
// ... after other imports
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBX6DXlQKVJCJNvXceAOJ_MAVabSeUG4bU",
    authDomain: "cross-platform-57f0d.firebaseapp.com",
    databaseURL: "https://cross-platform-57f0d.firebaseio.com",
    projectId: "cross-platform-57f0d",
    storageBucket: "cross-platform-57f0d.appspot.com",
    messagingSenderId: "1035805925792",
    appId: "1:1035805925792:web:ece83a8b042b1ed35e44c5",
    measurementId: "G-GZR4GLNQ70"
  };
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase

export default firebase

// ... before export default statemen
export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
    timestampsInSnapshots: false
})
