export enum IsAuthorizedActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  CHECK_USER_TOKEN = 'CHECK_USER_TOKEN',
  LOGOUT_USER = 'LOGOUT_USER'
}

interface LoginUserAction {
  type: IsAuthorizedActionTypes.LOGIN_USER;
}
interface CheckUserTokenAction {
  type: IsAuthorizedActionTypes.CHECK_USER_TOKEN;
}
interface LogoutUserAction {
  type: IsAuthorizedActionTypes.LOGOUT_USER;
}

export type IsAuthorizedActions =
  | LoginUserAction
  | CheckUserTokenAction
  | LogoutUserAction;
