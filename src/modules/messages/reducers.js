import types from './types';


const initialState = {
  messages: [],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return {
        ...state,
        messages: [...messages, action.message],
      };

    default:
      return state;
  }
};

export default messagesReducer;
