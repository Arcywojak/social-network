import axios from 'axios';
import {GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from './types';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getComments = (id) => dispatch => {
    axios
    .get(`/api/comment/${id}`)
    .then(res => {
        dispatch({
            type:GET_COMMENTS,
            payload:res.data
        })
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addComment = (item) => (dispatch, getState) => {
    axios
    .post('/api.posts', item)
    .then(res => {
        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        })
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
  
}

export const deleteComment = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/posts/${id}`)
    .then( res => {
        dispatch({
            type:DELETE_COMMENT,
            payload:id
        })
    })
}
