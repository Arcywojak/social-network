import {GET_OTHER_USER} from '../actions/types';

const initialState = {
    otherUser: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_OTHER_USER:
            return {
                ...state,
                otherUser: action.payload,
            };

        default:
            return state;
    }
}