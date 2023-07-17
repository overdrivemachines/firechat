// Instructions from https://console.firebase.google.com/u/0/project/firechat-86306/overview

import { initializeApp } from "firebase/app";

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
