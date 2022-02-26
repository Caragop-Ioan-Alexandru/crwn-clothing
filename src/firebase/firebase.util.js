import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyC_XUA5Tmajxb208D1xkL_qGFW3Z0iwp0g",
  authDomain: "crwn-db-1f1b8.firebaseapp.com",
  projectId: "crwn-db-1f1b8",
  storageBucket: "crwn-db-1f1b8.appspot.com",
  messagingSenderId: "690238316462",
  appId: "1:690238316462:web:a8f079bd06092ac225723f",
  measurementId: "G-DV5GF988LN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
