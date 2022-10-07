import { IsAuthorizedActions, IsAuthorizedActionTypes } from '../action-types/isAuthorizedActionTypes';
import { isAuthorizedStateType } from '../types';

const initialState: isAuthorizedStateType = false;

export const isAuthorizedReducer = (
  state = initialState,
  action: IsAuthorizedActions,
): isAuthorizedStateType => {
  switch (action.type) {
    case IsAuthorizedActionTypes.LOGIN_USER:
      return true;
    case IsAuthorizedActionTypes.CHECK_USER_TOKEN:
      return true;
    case IsAuthorizedActionTypes.LOGOUT_USER:
      return false;
    default:
      return state;
  }
};
