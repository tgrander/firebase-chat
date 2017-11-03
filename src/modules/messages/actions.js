import types from './types';
import { db } from '../../firebase';


export const sendMessage = (message) => {
  db.collection('messages').add(message)
    .then(res => console.log(res));

  return {
    type: types.SEND_MESSAGE,
    message,
  };
};
