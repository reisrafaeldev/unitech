import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3pgItyRqdYZFh8Hs2eZoaHscl7tc2YRA",
  authDomain: "unitech-f5b93.firebaseapp.com",
  projectId: "unitech-f5b93",
  storageBucket: "unitech-f5b93.appspot.com",
  messagingSenderId: "575754223741",
  appId: "1:575754223741:web:16770d477965b95907b114",
  measurementId: "G-5HE21R6RMH"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const auth = getAuth(app);
