import types from './types';


const initialState = {

  isAuthorized: false,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        isAuthorized: true,
        userId: action.userId,
      };

    default:
      return state;
  }
};

export default authReducer;
