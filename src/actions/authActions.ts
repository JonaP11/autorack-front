import {ThunkAction} from 'redux-thunk';
import fireAuth from '../config/firebaseConfig';
import {RootState} from '../store';

import {
  AuthAction,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  SET_USER,
  SetSuccessAction,
  SIGN_OUT,
  SignInData,
  SignUpData,
  User,
} from './types';

// Create user
export const signUp = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const res = await fireAuth.createUserWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        console.log('created new user');
        const userData: User = {
          email: data.email,
          firstName: data.firstName,
          id: res.user.uid,
          createdAt: Date.now(),
        };
        // await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
        // await res.user.sendEmailVerification();
        // dispatch({
        //   type: NEED_VERIFICATION,
        // });
        // TODO: SEND THIS DATA TO THE DATABASE
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      console.log(err);
      onError();
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

// Get user by id
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return async (dispatch) => {
    try {
      // TODO: GRAB THIS DATA USING OUR API EPs
      // const user = await firebase.firestore().collection('users').doc(id).get();
      // if (user.exists) {
      //   const userData = user.data() as User;
      //   dispatch({
      //     type: SET_USER,
      //     payload: userData,
      //   });
      // }
    } catch (err) {
      console.log(err);
    }
  };
};

// Set loading
export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  };
};

// Log in
export const signIn = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const res = await fireAuth.signInWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        console.log('created new user');
        const userData: User = {
          email: res.user.email,
          id: res.user.uid,
        };
        console.log(userData);
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      console.log(err);
      onError();
      dispatch(setError(err.message));
    }
  };
};

// Log out
export const signOut = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await fireAuth.signOut();
      dispatch({
        type: SIGN_OUT,
      });
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
};

// Set error
export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: msg,
    });
  };
};

// // Set need verification
// export const setNeedVerification = (): ThunkAction<void, RootState, null, AuthAction> => {
//   return (dispatch) => {
//     dispatch({
//       type: NEED_VERIFICATION,
//     });
//   };
// };

// Set success
export const setSuccess = (msg: string): ThunkAction<void, RootState, null, SetSuccessAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};

// Send password reset email
export const sendPasswordResetEmail = (email: string, successMsg: string): ThunkAction<void, RootState, null,
    AuthAction> => {
  return async (dispatch) => {
    try {
      await fireAuth.sendPasswordResetEmail(email);
      dispatch(setSuccess(successMsg));
    } catch (err) {
      console.log(err);
      dispatch(setError(err.message));
    }
  };
};