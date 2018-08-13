import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKAXVT6_Gly60Jm1JQ1Ic_a0spjTKy_4I",
    authDomain: "catch-of-the-day-josh-jensen.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-josh-jensen.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export { firebaseApp }

// This is a default export 
export default base;