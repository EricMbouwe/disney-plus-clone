import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3eo_4SZvbE_U20xbShPol-UnCzkay2IU",
  authDomain: "disney-plus-eric.firebaseapp.com",
  projectId: "disney-plus-eric",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "536024621831",
  appId: "1:536024621831:web:938b0477eee9e5a50c1ba2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
