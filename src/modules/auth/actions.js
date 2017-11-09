import types from './types';


export const authorizeUser = userId => ({

  type: types.AUTHORIZE_USER,
  userId,
});

export const signIn = (email, password) => ({

  type: types.SIGN_IN,
  email,
  password,
});

export const signUp = (email, password) => ({
  type: types.SIGN_UP,
  email,
  password,
});

export const signOut = () => ({

  type: types.SIGN_OUT,
  userId: null,
});
