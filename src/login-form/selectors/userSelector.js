
import Immutable from 'immutable';
import { USER_STATE } from '../../config/constants';

// const rootState=Immutable.fromJS({state});
export const userSelector = state => state[USER_STATE].users;