const firebaseConfig = {
  apiKey: "AIzaSyA-zl41qVZqEvh6VdOz6XT7fWsJthSfMZI",
  authDomain: "canvasly-800af.firebaseapp.com",
  projectId: "canvasly-800af",
  storageBucket: "canvasly-800af.firebasestorage.app",
  messagingSenderId: "586191902956",
  appId: "1:586191902956:web:0f3b542e127797c43b6dc9"
};

if (typeof firebase !== "undefined" && firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
