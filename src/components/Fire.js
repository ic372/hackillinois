import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
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

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, school, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
