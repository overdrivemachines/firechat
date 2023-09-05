// Instructions from https://console.firebase.google.com/u/0/project/firechat-86306/overview

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
// initializeApp returns a Firebase App instance, which allows our application
// to use common configuration and authentication across Firebase services.
const app = initializeApp(firebaseConfig);
// initialize a Firestore instance, which returns a reference to the
// Firestore service that we can use to perform reads and writes.
const db = getFirestore(app);

// Returns {uid, displayName}
async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const { user } = await signInWithPopup(auth, provider);

    return { uid: user.uid, displayName: user.displayName };
  } catch (error) {
    if (error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }

    return null;
  }
}

// called by MessageInput component when the user submits their message
async function sendMessage(roomId, user, text) {
  try {
    await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
}

// Fetching room messages.
// Used by <MessageList> component.
function getMessages(roomId, callback) {
  // The onSnapshot SDK function lets us take advantage of Firestore’s real-time updates.
  // It listens to the result of a query and receives updates when a change is made.
  // onSnapshot returns an unsubscribe function to detach the listener so that our callback isn’t called when it’s no longer needed
  return onSnapshot(query(collection(db, "chat-rooms", roomId, "messages"), orderBy("timestamp", "asc")), (querySnapshot) => {
    // this gets called when we receive the initial query and any subsequent updates
    const messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(messages);
  });
}

export { loginWithGoogle, sendMessage, getMessages };
