import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-PIuU6RQoZRmbtbi-w1TjTLRTxi181t4",
  authDomain: "morefirebase-cdf8b.firebaseapp.com",
  projectId: "morefirebase-cdf8b",
  storageBucket: "morefirebase-cdf8b.appspot.com",
  messagingSenderId: "743154988051",
  appId: "1:743154988051:web:0b4e9b6e65ef943aa43be6",
  measurementId: "G-609YZHSEFW"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const displayName = result.user.displayName;
    const email = result.user.email;
    const photoURL = result.user.photoURL;
    localStorage.setItem('displayName', displayName)
    localStorage.setItem('email', email)
    localStorage.setItem('photoURL', photoURL)
    console.log(localStorage.getItem('displayName'),localStorage.getItem('email' ),localStorage.getItem('photoURL'));
  }).catch((error) => {
    console.log(error);
  });
 }