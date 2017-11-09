import types from './types';
import uuid from '../../utilities/uuid';
// import { db } from '../../firebase';


export const sendMessage = message =>
  // db.collection('messages').add(message)
  //   .then(res => console.log(res));

  ({
    type: types.SEND_MESSAGE,
    message,
    id: uuid(),
  });
