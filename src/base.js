import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore'

//export const firestore = firebase.firestore();

// const fireApp = firebase.initializeApp({
//     apiKey:process.env.REACT_APP_FIREBASE_KEY,
//     authDomain:process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseUrl:process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId:process.env.REACT_APP_FIREBASE_KEY_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_FIREBASE_KEY_STORAGE_BUCKET,
//     messagingSenderId:process.env.REACT_APP_FIREBASE_KEY_SENDER_ID
// })

const fireApp = firebase.initializeApp({
    apiKey: "AIzaSyCDUPnBJ_FOk80eGRXFnR3bgd-5kzgYEWw",
    authDomain: "dev-chat-8f7e1.firebaseapp.com",
    projectId: "dev-chat-8f7e1",
    storageBucket: "dev-chat-8f7e1.appspot.com",
    messagingSenderId: "607992176248",
    appId: "1:607992176248:web:b037c464831fa183a5978d",
    measurementId: "G-3J6YX53P23"
})

export default fireApp;