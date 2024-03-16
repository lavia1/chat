// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query, orderBy,collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
 initializeApp(firebaseConfig);

 const firestore = getFirestore();

 const MESSAGES = 'messages';

 export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    orderBy,
    MESSAGES
 };