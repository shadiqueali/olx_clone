import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm806f4Gh8lMj7IRElY85c-YKJcxrLolI",
  authDomain: "olxx-516d2.firebaseapp.com",
  databaseURL: "https://olxx-516d2-default-rtdb.firebaseio.com",
  projectId: "olxx-516d2",
  storageBucket: "olxx-516d2.appspot.com",
  messagingSenderId: "40166723691",
  appId: "1:40166723691:web:bc8c92303de64c9ca1612e",
  measurementId: "G-3KYCP2MB17"
};
 export default firebase.initializeApp(firebaseConfig)