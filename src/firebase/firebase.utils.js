import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyA9luJm3YpVCS8g6TTEaT6LnFcWgJa8jYI",
  authDomain: "react-menu-planning.firebaseapp.com",
  databaseURL: "https://react-menu-planning.firebaseio.com",
  projectId: "react-menu-planning",
  storageBucket: "react-menu-planning.appspot.com",
  messagingSenderId: "597760389513",
  appId: "1:597760389513:web:f1bcd0bfb857ce78ab7158",
  measurementId: "G-W699RKCGKP",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
