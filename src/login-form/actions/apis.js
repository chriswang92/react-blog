

import {APPNAME} from '../config';
export const REGISTER_USER = `@@CHRISWANG/${APPNAME}/REGISTER_USER`;
export const LOGIN_USER = `@@CHRISWANG/${APPNAME}/LOGIN_USER`;

let userId = 0;

export const registerUser = userInfo => ({
  type: REGISTER_USER,
  payload: {
    id: ++userId,
    userInfo
  }
});

