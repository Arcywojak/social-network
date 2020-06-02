import axios from 'axios';
import {GET_OTHER_USER} from './types';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getOtherUser = (name=null) => (dispatch, getState) => {
    if(name){   
        axios
        .get(`/api/auth/user/${name}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_OTHER_USER,
                payload:res.data || {}
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    }
}