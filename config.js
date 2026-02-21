import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAElga8j8thxNtSqFzgfqECu6E6eT8RZFY",
    authDomain: "webmail-arufkuy.firebaseapp.com",
    projectId: "webmail-arufkuy",
    storageBucket: "webmail-arufkuy.firebasestorage.app",
    messagingSenderId: "608495162500",
    appId: "1:608495162500:web:b70eb55061305f83ef5ed1",
    measurementId: "G-JXST3Z88R7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const WORKER_API = "https://api.arufkuy.workers.dev";
