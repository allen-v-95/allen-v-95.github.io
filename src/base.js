import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAuT1_iMrGiIAg0knXGM4XCas-7NOvdiyM",
    authDomain: "challenge-me-d4a56.firebaseapp.com",
    databaseURL: "https://challenge-me-d4a56.firebaseio.com"
}

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;