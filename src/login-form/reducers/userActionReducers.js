import {REGISTER_USER} from '../actions/apis';


const userActionsReducer = (state=[], action) => {
    switch(action.type) {
        case REGISTER_USER:
            return [
                ...state,
                {
                    id: action.id,
                    username: action.username,
                    password: action.password
                }
            ]
        default:
            return state;
    }
}

export default userActionsReducer;