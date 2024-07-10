importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDLp52E7-yzXST6OHAYT5dWF1Gjfl2ZP1M",
    authDomain: "test-49b2e.firebaseapp.com",
    projectId: "test-49b2e",
    storageBucket: "test-49b2e.appspot.com",
    messagingSenderId: "707645520656",
    appId: "1:707645520656:web:bbc9cb8813c9d768d58395"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// self.addEventListener('push', (event) => {
//   // معالجة الرسائل الواردة هنا
// });

// self.addEventListener('notificationclick', (event) => {
//   // معالجة النقرات على الإشعارات هنا
// });
