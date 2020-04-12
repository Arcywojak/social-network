import axios from 'axios';
import {GET_OTHER_USER} from './types';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getOtherUser = (id=null) => (dispatch, getState) => {
    if(id){   
        console.log("I DO IT")  
        axios
        .get(`/api/auth/user/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_OTHER_USER,
                payload:res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    }
}