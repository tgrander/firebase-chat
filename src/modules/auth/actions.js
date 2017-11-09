import types from './types';


export const signIn = userId => ({

  type: types.SIGN_IN,
  userId,
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
