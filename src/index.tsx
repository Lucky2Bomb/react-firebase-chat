import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")!;
const root = createRoot(container);

const firebaseConfig = {
  apiKey: "AIzaSyA3iC3r5W6t5fnxQB3vCAsVHqrpiUQTQgg",
  authDomain: "chat-b7d04.firebaseapp.com",
  projectId: "chat-b7d04",
  storageBucket: "chat-b7d04.appspot.com",
  messagingSenderId: "740364360638",
  appId: "1:740364360638:web:481421ec5490418fb1b7ef",
  measurementId: "G-T4WL3PLWE6",
};

interface FirebaseContextProps {
  auth: Auth;
  db: Firestore;
  firebase: FirebaseApp;
}

const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

const auth = getAuth();
const db = getFirestore();

export const FirebaseContext = createContext<FirebaseContextProps>({ firebase, auth, db });

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, auth, db }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
