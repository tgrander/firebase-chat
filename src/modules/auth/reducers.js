import types from './types';


const initialState = {

  isAuthorized: false,
  userId: null,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        userId: action.userId,
      };

    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        uid: action.uid,
      };

    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default authReducer;
