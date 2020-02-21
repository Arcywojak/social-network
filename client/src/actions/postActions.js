import axios from 'axios';
import {GET_POSTS, ADD_POST, DELETE_POST, ITEMS_LOADING} from './types';
//import {tokenConfig} from './authActions';
//import {returnErrors} from './errorActions';

export const getPosts = () => dispatch => {
    dispatch(setItemsLoading() );
    axios
    .get('/api/posts')
    .then(res => {
        dispatch({
            type:GET_POSTS,
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
            type:ADD_POST,
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
            type:DELETE_POST,
            payload:id
        })
    })
}

export const setItemsLoading = () => {
    return {
        type:ITEMS_LOADING
    }
}