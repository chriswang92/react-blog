import {REGISTER_USER, LOGIN_USER} from '../actions/apis';
import {USER_STATE} from '../../config/constants';
import Immutable from 'immutable';

export default function userReducer(state=[], action) {
    // const state = rootState.get([USER_STATE]);
    switch(action.type) {
        case REGISTER_USER:
            console.log('in userReducer->registerUser, state=',state);
            const immuData = 
            [ ...state,
                {
                    id: action.payload.id,
                    username: action.payload.userInfo.username,
                    password: action.payload.userInfo.password
                }
            ];
            // return state.withMutations(mutableState => 
            //     mutableState.set(immuData));
            return immuData;
        case LOGIN_USER:

        default:
            return state;
    }
}