import firebase from "firebase";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDomqK4pTrubgos0-A5ioMlbR-soDtaA1g",
  authDomain: "hackillinois-d891a.firebaseapp.com",
  databaseURL: "https://hackillinois-d891a.firebaseio.com",
  projectId: "hackillinois-d891a",
  storageBucket: "hackillinois-d891a.appspot.com",
  messagingSenderId: "1080479088903",
  appId: "1:1080479088903:web:116bf300398f94434685a2",
  measurementId: "G-D2SZ2R468C",
};
const fire = firebase.initializeApp(config);
export default fire;
