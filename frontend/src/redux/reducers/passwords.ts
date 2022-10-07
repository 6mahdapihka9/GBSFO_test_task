import { PasswordsStateType } from '../types';
import { PasswordsActions, PasswordsActionTypes } from '../action-types/passwordsActionTypes';

const initialState: PasswordsStateType = [
  {
    _id: '1',
    name: 'default',
    value: '1234'
  },
  {
    _id: '2',
    name: 'discord',
    value: '1234'
  },
  {
    _id: '3',
    name: 'facebookfacebookfacebookfacebookfacebook',
    value: '1234'
  },
  {
    _id: '4',
    name: 'youtube',
    value: '12341234123412341234123412341234'
  },
  {
    _id: '5',
    name: 'twitter',
    value: '1234'
  },
  {
    _id: '6',
    name: 'email',
    value: '1234'
  }
];

export const passwordsReducer = (
  state = initialState,
  action: PasswordsActions,
): PasswordsStateType => {
  switch (action.type) {
    case PasswordsActionTypes.READ_PASSWORDS:
      // todo save fetched passwords
      return [...state];
    default:
      return [...state];
  }
};
