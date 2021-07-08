import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

firebase.initializeApp(
    {
        apiKey: "AIzaSyB8SnNNWItIbH-6SSeQJbgf4na2Fckty2Q",
        authDomain: "reels-ffbb5.firebaseapp.com",
        projectId: "reels-ffbb5",
        storageBucket: "reels-ffbb5.appspot.com",
        messagingSenderId: "959901057609",
        appId: "1:959901057609:web:ce5ff34d58645ee9467598"
    }
);

export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database={
    users:firestore.collection('users'),
    getCurrentTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}
export const storage= firebase.storage();