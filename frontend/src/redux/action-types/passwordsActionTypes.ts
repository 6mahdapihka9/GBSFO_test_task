import { PasswordType } from '../../types/types';

export enum PasswordsActionTypes {
    CREATE_PASSWORD = 'CREATE_PASSWORD',
    READ_PASSWORDS = 'READ_PASSWORDS',
    UPDATE_PASSWORD = 'UPDATE_PASSWORD',
    DELETE_PASSWORD = 'DELETE_PASSWORD',
    CLEAR_LIST = 'CLEAR_LIST',
}

interface CreatePasswordAction {
    type: PasswordsActionTypes.CREATE_PASSWORD;
    payload: PasswordType;
}
interface ReadPasswordsAction {
    type: PasswordsActionTypes.READ_PASSWORDS;
    payload: PasswordType[];
}
interface UpdatePasswordAction {
    type: PasswordsActionTypes.UPDATE_PASSWORD;
    payload: PasswordType;
}
interface DeletePasswordAction {
    type: PasswordsActionTypes.DELETE_PASSWORD;
    payload: string;
}
interface ClearListAction {
    type: PasswordsActionTypes.CLEAR_LIST;
}

export type PasswordsActions =
    | CreatePasswordAction
    | ReadPasswordsAction
    | UpdatePasswordAction
    | DeletePasswordAction
    | ClearListAction;
