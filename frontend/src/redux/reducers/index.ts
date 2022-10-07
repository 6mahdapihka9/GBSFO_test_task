import { combineReducers } from 'redux';
import { isAuthorizedReducer } from './isAuthorized';
import { passwordsReducer } from './passwords';

export const rootReducer = combineReducers({
  isAuthorized: isAuthorizedReducer,
  passwords: passwordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
