import axios from 'axios';
import {GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from './types';
//import {tokenConfig} from './authActions';
//import {returnErrors} from './errorActions';

export const getPosts = () => dispatch => {
    axios
    .get('/api/posts')
    .then(res => {
        dispatch({
            type:GET_COMMENTS,
            payload:res.data
        })
    })
    //.catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addItem = (item) => (dispatch, getState) => {
    axios
    .post('/api.posts', item)
    .then(res => {
        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        })
    })
    //.catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
  
}

export const deleteItem = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/posts/${id}`)
    .then( res => {
        dispatch({
            type:DELETE_COMMENT,
            payload:id
        })
    })
}
