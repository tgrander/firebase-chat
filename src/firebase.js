import firebase from 'firebase';
import firestore from 'firebase/firestore';


const config = {
  apiKey: 'AIzaSyBvNz-3UpdRHKW8jogL98ySXRwyHrZmg6k',
  authDomain: 'happy-chat-7cdbe.firebaseapp.com',
  databaseURL: 'https://happy-chat-7cdbe.firebaseio.com',
  projectId: 'happy-chat-7cdbe',
  storageBucket: '',
  messagingSenderId: '664974801900',
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export const auth = firebase.auth();
