// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyAM3gpdIOft0N-YxIOoI_bhFsLHHTF-ssI",
  authDomain: "creative-agency-5a7fe.firebaseapp.com",
  databaseURL: "https://creative-agency-5a7fe.firebaseio.com",
  projectId: "creative-agency-5a7fe",
  storageBucket: "creative-agency-5a7fe.appspot.com",
  messagingSenderId: "128693163261",
  appId: "1:128693163261:web:d4acd66f72bb019f2dda94",
  measurementId: "G-PSHHDXCGPH"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
