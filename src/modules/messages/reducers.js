import types from './types';


const initialState = {
  messages: {},
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.message.messageId]: action.message,
        },
      };

    case types.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.messageId]: {
            ...state.messages[action.messageId],
            isSending: false,
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
            isSending: false,
            failed: true,
          },
        },
      };

    default:
      return state;
  }
};

export default messagesReducer;
