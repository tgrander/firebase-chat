import firebase from 'firebase';
import firestore from 'firebase/firestore';


const config = {
  apiKey: 'AIzaSyD1iBRdsb-xL2PIg77rT9FlkdN67LBIktQ',
  authDomain: 'fir-chat-43ebf.firebaseapp.com',
  databaseURL: 'https://fir-chat-43ebf.firebaseio.com',
  projectId: 'fir-chat-43ebf',
  storageBucket: '',
  messagingSenderId: '919446637042',
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export const auth = firebase.auth();
