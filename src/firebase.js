import firebase, { firestore } from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuul4AQzj00dNUsNkDe9mEwiGv3U6OWgQ",
    authDomain: "my-fb-clone-52007.firebaseapp.com",
    projectId: "my-fb-clone-52007",
    storageBucket: "my-fb-clone-52007.appspot.com",
    messagingSenderId: "94474025720",
    appId: "1:94474025720:web:fc78a5bb2e48b34eae590d",
    measurementId: "G-D5KTYFKM49"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db