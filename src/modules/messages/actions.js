import types from './types';
import uuid from '../../utilities/uuid';
// import { db } from '../../firebase';


export const sendMessage = message => ({
  type: types.SEND_MESSAGE,
  message: {
    ...message,
    messageId: uuid(),
  },
});

export const fetchMessages = () => ({ type: types.FETCH_MESSAGES });

export const fetchMessagesSuccess = querySnapshot => ({

  type: types.FETCH_MESSAGES_SUCCESS,
  messages: querySnapshot.docs.reduce((accum, curr) => {
    const message = curr.data();
    return { ...accum, [message.messageId]: { ...message, sendState: 'success' } };
  }, {}),
});
