import * as isAuthorizedActionCreator from './isAuthorizedActionCreator';
import * as passwordsActionCreator from './passwordsActionCreator';

export default {
  ...isAuthorizedActionCreator,
  ...passwordsActionCreator,
};
