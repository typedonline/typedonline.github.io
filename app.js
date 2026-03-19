import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTWXcnmqL-uSykGAktYn5trgYf6907P4Q",
  authDomain: "hamish-site-46d71.firebaseapp.com",
  projectId: "hamish-site-46d71",
  storageBucket: "hamish-site-46d71.firebasestorage.app",
  messagingSenderId: "23570492374",
  appId: "1:23570492374:web:9eb0d5c7955e0eea3b9277"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const authContainer = document.getElementById("authContainer");
const chatContainer = document.getElementById("chatContainer");
const messagesDiv = document.getElementById("messages");

document.getElementById("signupBtn").onclick = async () => {
  await createUserWithEmailAndPassword(auth, email.value, password.value);
};

document.getElementById("loginBtn").onclick = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value);
};

document.getElementById("logoutBtn").onclick = async () => {
  await signOut(auth);
};

document.getElementById("sendBtn").onclick = async () => {
  if (!auth.currentUser) return;

  await addDoc(collection(db, "messages"), {
    text: messageInput.value,
    uid: auth.currentUser.uid,
    email: auth.currentUser.email,
    createdAt: serverTimestamp()
  });

  messageInput.value = "";
};

const q = query(collection(db, "messages"), orderBy("createdAt"));

onSnapshot(q, (snapshot) => {
  messagesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();

    const msg = document.createElement("div");
    msg.classList.add("message");

    if (auth.currentUser && data.uid === auth.currentUser.uid) {
      msg.classList.add("sent");
    } else {
      msg.classList.add("received");
    }

    const time = data.createdAt?.toDate
      ? data.createdAt.toDate().toLocaleTimeString()
      : "";

    msg.innerHTML = `
      <div>${data.text}</div>
      <div class="timestamp">${time}</div>
    `;

    messagesDiv.appendChild(msg);
  });

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    authContainer.classList.add("hidden");
    chatContainer.classList.remove("hidden");
  } else {
    authContainer.classList.remove("hidden");
    chatContainer.classList.add("hidden");
  }
});
