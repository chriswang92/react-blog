import {REGISTER_USER} from '../actions/apis';
import {USER_STATE} from '../../config/constants';
import Immutable from 'immutable';

export default function userActionReducers(rootState=Immutable.Map({}), action) {
    const state = rootState.get(USER_STATE);
    switch(action.type) {
        case REGISTER_USER:
            const immuData = Immutable.fromJS([
                ...state,
                {
                    id: action.payload.id,
                    username: action.payload.username,
                    password: action.payload.password
                }
            ]);
            return rootState.withMutations(mutableState => 
                mutableState.updateIn([USER_STATE],immuData));
        default:
            return rootState;
    }
}