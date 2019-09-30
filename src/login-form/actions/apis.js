

import {APPNAME} from '../config';
export const REGISTER_USER = `@@CHRISWANG/${APPNAME}/REGISTER_USER`;

export const registerUser = (userInfo) => ({
  type: REGISTER_USER,
  payload: userInfo
});