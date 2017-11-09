import types from './types';


const initialState = {
  messages: {},
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: { ...state.messages, ...action.messages },
      };

    case types.SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.message.messageId]: { ...action.message, sendState: 'sending' },
        },
      };

    case types.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.messageId]: {
            ...state.messages[action.messageId],
            sendState: 'success',
          },
        },
      };

    case types.SEND_MESSAGE_FAILURE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.messageId]: {
            ...state.messages[action.messageId],
            sendState: 'failed',
          },
        },
      };

    default:
      return state;
  }
};

export default messagesReducer;
