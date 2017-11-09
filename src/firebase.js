import firebase from 'firebase';
import firestore from 'firebase/firestore';


const config = {
  apiKey: 'AIzaSyAV7YPQaeTQcR_eYxlyvAyMeF3jibgG-mY',
  authDomain: 'happy-chat-b2eb0.firebaseapp.com',
  databaseURL: 'https://happy-chat-b2eb0.firebaseio.com',
  projectId: 'happy-chat-b2eb0',
  storageBucket: '',
  messagingSenderId: '807917236846',
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export const auth = firebase.auth();
