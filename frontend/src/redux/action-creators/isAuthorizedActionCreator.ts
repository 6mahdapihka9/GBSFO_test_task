import { Dispatch } from 'redux';
import axios from '../../services/axios';
import {
  IsAuthorizedActions,
  IsAuthorizedActionTypes,
} from '../action-types/isAuthorizedActionTypes';
import { removeToken, saveToken } from '../../utils/localStorage';

/* eslint-disable max-len */
export const signUp = (name: string, email: string, password: string, callback: Function) => async () => {
  try {
    await axios().post('auth/sign-up', { name, email, password });
    callback(true);
  } catch (error: any) {
    callback(false);
    throw new Error(error);
  }
};

export const signIn = (email: string, password: string) => async (dispatch: Dispatch<IsAuthorizedActions>) => {
  try {
    const response = await axios().post('auth/sign-in', { email, password });

    if (response.status === 200) {
      dispatch({
        type: IsAuthorizedActionTypes.LOGIN_USER,
      });
    }
    saveToken(response.data.token);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const checkToken = () => async (dispatch: Dispatch<IsAuthorizedActions>) => {
  try {
    const response = await axios().get('auth/check-token');

    if (response.status === 200) {
      dispatch({
        type: IsAuthorizedActionTypes.CHECK_USER_TOKEN,
      });
    } else {
      removeToken();
    }
  } catch (error: any) {
    removeToken();
    throw new Error(error);
  }
};

export const signOut = () => async (dispatch: Dispatch<IsAuthorizedActions>) => {
  dispatch({
    type: IsAuthorizedActionTypes.LOGOUT_USER,
  });
  removeToken();
};
