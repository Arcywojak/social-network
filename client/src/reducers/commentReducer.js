import {GET_COMMENTS, DELETE_COMMENTS, ADD_COMMENTS} from '../actions/types';

const initialState = {
    comments: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_COMMENTS:
            return {
                ...state,
                comments:action.payload,
            };

        case ADD_COMMENTS:
            return {
                ...state,
                comments:[action.payload, ...state.comments]
            };

        case DELETE_COMMENTS:
            return{
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };

        default:
            return state;
    }
}