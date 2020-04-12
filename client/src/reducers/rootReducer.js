import {combineReducers} from 'redux';
import authReducer from './authReducer'; 
import postReducer from './postReducer'; 
import commentReducer from './commentReducer'; 
import errorReducer from './errorReducer'; 
import otherUserReducer from './otherUserReducer';

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    comment: commentReducer,
    error: errorReducer,
    otherUser: otherUserReducer
})
