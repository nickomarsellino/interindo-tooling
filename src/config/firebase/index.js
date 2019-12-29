import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDfPqpWCwiHmMCNStH5wAnk2NqlFqQ12mA",
    authDomain: "reactjs-firebase-e8649.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-e8649.firebaseio.com",
    projectId: "reactjs-firebase-e8649",
    storageBucket: "reactjs-firebase-e8649.appspot.com",
    messagingSenderId: "491607511007",
    appId: "1:491607511007:web:dd2319dbea4e2083573e6a",
    measurementId: "G-3V4RYHX0D8"
};

// INTRINDO LINK  
// const firebaseConfig = {
//     apiKey: "AIzaSyDCSOEtN05ib-vXehN7_Fvtn6rZL6Q9G-8",
//     authDomain: "interindo-tooling.firebaseapp.com",
//     databaseURL: "https://interindo-tooling.firebaseio.com",
//     projectId: "interindo-tooling",
//     storageBucket: "interindo-tooling.appspot.com",
//     messagingSenderId: "647312753228",
//     appId: "1:647312753228:web:0ceb59ffd8a43f630f6ae9",
//     measurementId: "G-C6EGZBZFXE"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("firebaseConfig: ",firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();
export const storageRef = storage.ref();

export default firebase;