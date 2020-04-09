import axios from 'axios';
import {GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from './types';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getCommentsAll = () => (dispatch, getState) => {
    axios
    .get(`/api/comments`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type:GET_COMMENTS,
            payload:res.data
        })
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const getComments = (id) => (dispatch, getState) => {
    axios
    .get(`/api/comments/${id}`, tokenConfig(getState))
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
    .post('/api/comments', item, tokenConfig(getState))
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
    .delete(`/api/comments/${id}`, tokenConfig(getState))
    .then( res => {
        dispatch({
            type:DELETE_COMMENT,
            payload:id
        })
    })
}
