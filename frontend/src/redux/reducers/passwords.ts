import { PasswordsStateType } from '../types';
import { PasswordsActions, PasswordsActionTypes } from '../action-types/passwordsActionTypes';

const initialState: PasswordsStateType = [
];

export const passwordsReducer = (
  state = initialState,
  action: PasswordsActions,
): PasswordsStateType => {
  switch (action.type) {
    case PasswordsActionTypes.CREATE_PASSWORD:
      return [...state, action.payload];

    case PasswordsActionTypes.READ_PASSWORDS:
      return [...action.payload];

    case PasswordsActionTypes.UPDATE_PASSWORD:
      const newPassword = action.payload;
      return [
        ...state.map(prevPass =>
          prevPass._id === newPassword._id
            ? newPassword
            : prevPass
        )
      ];

    case PasswordsActionTypes.DELETE_PASSWORD:
      const deletedID = action.payload;
      return [...state.filter(pass => pass._id !== deletedID)];

    case PasswordsActionTypes.CLEAR_LIST:
      return initialState;

    default:
      return [...state];
  }
};
