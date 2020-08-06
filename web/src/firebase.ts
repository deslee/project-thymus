import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'

var firebaseConfig = {
  apiKey: "AIzaSyCiBGucpfSLmrYu9MVFi0wdzMdyFy2mPCc",
  authDomain: "project-thymus.firebaseapp.com",
  databaseURL: "https://project-thymus.firebaseio.com",
  projectId: "project-thymus",
  storageBucket: "project-thymus.appspot.com",
  messagingSenderId: "546737471436",
  appId: "1:546737471436:web:017f23d0355d110d92a769",
  measurementId: "G-68MVGYY2CP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const ui = new firebaseui.auth.AuthUI(firebase.auth());