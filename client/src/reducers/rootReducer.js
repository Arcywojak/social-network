import {combineReducers} from 'redux';
import authReducer from './authReducer'; 
import postReducer from './postReducer'; 
import commentReducer from './commentReducer'; 
import errorReducer from './errorReducer'; 

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    comment: commentReducer,
    error: errorReducer
})
