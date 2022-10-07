import { Dispatch } from 'redux';
import { PasswordType } from '../../types/types';
import { PasswordsActions, PasswordsActionTypes } from '../action-types/passwordsActionTypes';

// todo implements rest usage via axios
export const createPassword = (password: PasswordType) => async (dispatch: Dispatch<PasswordsActions>) => {
  dispatch({
    type: PasswordsActionTypes.CREATE_PASSWORD,
    payload: password,
  });
};

export const readPasswords = () => async (dispatch: Dispatch<PasswordsActions>) => {
  dispatch({
    type: PasswordsActionTypes.READ_PASSWORDS,
    payload: [],
  });
};

export const updatePassword = (password: PasswordType) => async (dispatch: Dispatch<PasswordsActions>) => {
  dispatch({
    type: PasswordsActionTypes.UPDATE_PASSWORD,
    payload: password,
  });
};

export const deletePassword = (id: string) => async (dispatch: Dispatch<PasswordsActions>) => {
  dispatch({
    type: PasswordsActionTypes.DELETE_PASSWORD,
    payload: id,
  });
};
