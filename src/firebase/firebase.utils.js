import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCn6pd5C6e_v-l-u2NMicBVedJQnsUVTI0",
  authDomain: "daily-todo-app-cd791.firebaseapp.com",
  projectId: "daily-todo-app-cd791",
  storageBucket: "daily-todo-app-cd791.appspot.com",
  messagingSenderId: "776055098300",
  appId: "1:776055098300:web:6c7daa5f69c2584c0b39b9",
  measurementId: "G-PSCQTBKQ1E",
};

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

//to create a new tasks docuement or get exisiting tasks list
export const addDocuments = async (uid) => {
  const todoRef = firestore.doc(`todo/${uid}`);
  const snapShot = await todoRef.get();

  if (!snapShot.exists) {
    // const { todo } = objectsToAdd;
    const createdAt = new Date();

    try {
      await todoRef.set({
        uid,
        createdAt,
        todo: [],
      });
    } catch (err) {
      console.log("error creating the todo", err.message);
    }
  }

  return todoRef;
};

// to update the document
export const updateDocuments = async (uid, objectsToAdd) => {
  const userRef = firestore.doc(`todo/${uid}`);
  console.log("reference", userRef);
  const snapShot = await userRef.get();

  if (snapShot.exists) {
    try {
      await userRef.set({
        todo: objectsToAdd,
      });
    } catch (err) {
      console.log("error creating the todo", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
