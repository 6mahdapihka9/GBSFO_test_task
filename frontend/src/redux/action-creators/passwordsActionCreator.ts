import { Dispatch } from 'redux';
import { PasswordType } from '../../types/types';
import { PasswordsActions, PasswordsActionTypes } from '../action-types/passwordsActionTypes';
import axios from '../../services/axios';

export const createPassword = (name: string, value: string) => async (dispatch: Dispatch<PasswordsActions>) => {
  try {
    const response = await axios().put(`passwords/create`, { name, value });
    if (response.status === 200) {
      dispatch({
        type: PasswordsActionTypes.CREATE_PASSWORD,
        payload: {
          name,
          value,
          _id: response.data._id
        },
      });
    } else {
      throw new Error(response.data.error);
    }
  } catch (error: any) {
    console.log(error);
  }
};

export const readPasswords = () => async (dispatch: Dispatch<PasswordsActions>) => {
  try {
    const response = await axios().get(`passwords/read`);

    if (response.status === 200) {
      dispatch({
        type: PasswordsActionTypes.READ_PASSWORDS,
        payload: response.data.list,
      });
    } else {
      throw new Error(response.data.error);
    }
  } catch (error: any) {
    console.log(error);
  }
};

export const updatePassword = (name: string, value: string, _id: string) => async (dispatch: Dispatch<PasswordsActions>) => {

  try {
    const response = await axios().patch(`passwords/update/${_id}`,{ name, value });
    if (response.status === 200) {
      dispatch({
        type: PasswordsActionTypes.UPDATE_PASSWORD,
        payload: {
          name,
          value,
          _id
        },
      });
    } else {
      throw new Error(response.data.error);
    }
  } catch (error: any) {
    console.error(error);
  }
};

export const deletePassword = (id: string) => async (dispatch: Dispatch<PasswordsActions>) => {
  try {
    const response = await axios().delete(`passwords/delete/${id}`);
    if (response.status === 200) {
      dispatch({
        type: PasswordsActionTypes.DELETE_PASSWORD,
        payload: id,
      });
    } else {
      throw new Error(response.data.error);
    }
  } catch (error: any) {
    console.log(error);
  }
};
