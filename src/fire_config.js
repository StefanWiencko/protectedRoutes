// import { configure } from "@testing-library/react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA3xHcjw2xnya8OV_7DpqtoZHelRBhqUXE",
  authDomain: "oddajrzeczy-86a03.firebaseapp.com",
  databaseURL: "https://oddajrzeczy-86a03.firebaseio.com",
  projectId: "oddajrzeczy-86a03",
  storageBucket: "oddajrzeczy-86a03.appspot.com",
  messagingSenderId: "546836709665",
  appId: "1:546836709665:web:8c3584070976137471fe60",
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const db = firebase.firestore();