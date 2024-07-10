import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';


const firebaseConfig = {
  apiKey: "AIzaSyDLp52E7-yzXST6OHAYT5dWF1Gjfl2ZP1M",
  authDomain: "test-49b2e.firebaseapp.com",
  projectId: "test-49b2e",
  storageBucket: "test-49b2e.appspot.com",
  messagingSenderId: "707645520656",
  appId: "1:707645520656:web:bbc9cb8813c9d768d58395"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export { messaging };

