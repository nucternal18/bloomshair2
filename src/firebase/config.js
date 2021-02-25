import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: 'bloomshair-e4d4d.firebaseapp.com',
  databaseURL: 'https://bloomshair-e4d4d.firebaseio.com',
  projectId: 'bloomshair-e4d4d',
  storageBucket: 'bloomshair-e4d4d.appspot.com',
  messagingSenderId: '534331746542',
  appId: '1:534331746542:web:c97e1871bd5cbe2fc6abff',
  measurementId: 'G-T09VWDC2L1',
};

/// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = projectFirestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = timestamp();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};

export {
  auth,
  projectStorage,
  projectFirestore,
  timestamp,
  createUserProfileDocument,
};
