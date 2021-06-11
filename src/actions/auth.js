import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    LOGOUT
} from './types'
import axios from 'axios'

export const checkAuthenticated = () => async dispatch =>{
   
    if(localStorage.getItem('item')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const body = JSON.stringify({ token: localStorage.getItem('access')})

        try{
            const res = await axios.post(`RUTA`,body,config)
            if(res.detail !== "Las credenciales de autenticación no se proveyeron."){
                console.log("auu")
                dispatch({
                    type:AUTHENTICATED_SUCCESS
                })
            }else{
                console.log("aaa")
                dispatch({
                    type:AUTHENTICATED_FAIL
                })
            }
                
            
        }catch (err){
            dispatch({
                type:AUTHENTICATED_FAIL
            })
        }

    }else{
        dispatch({
            type:AUTHENTICATED_FAIL
        })
    }
}

export const load_user = () => dispatch =>{
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        try{
            const res = axios.post(`RUTAA`,config)
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        }catch{
            dispatch({
                type: USER_LOADED_FAIL,

            })
        }
    }
    else{
        dispatch({
            type: USER_LOADED_FAIL,

        })
    }
    
}

export const login = (email,password) => dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email,password})

    try{
        const res = axios.post(`RUTAA`,body,config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(load_user())
    }catch{
        dispatch({
            type: LOGIN_FAIL,
           
        })
    }

}
export const signup = (datosDeRegistro) => dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({datosDeRegistro})

    try{
        const res = axios.post(`RUTAA`,body,config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
    }catch{
        dispatch({
            type: SIGNUP_FAIL,
           
        })
    }
}

export const verify = (uid,token)=> async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({uid,token})

    try{
        const res = axios.post(`RUTAA`,body,config)
        dispatch({
            type:ACTIVATION_SUCCESS,
            payload: res.data
        })
    }catch{
        dispatch({
            type: ACTIVATION_FAIL,
           
        })
    }

}

export const reset_password=(email)=> async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email})

    try{
        await axios.post(`RUTA`,body,config)
        dispatch({
            type:PASSWORD_RESET_SUCCESS
        })
    }catch(err){
        dispatch({
            type:PASSWORD_RESET_FAIL
        })
    }
}


export const reset_password_confirm=(uid,token,new_password,re_new_password)=> async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({uid,token,new_password,re_new_password})

    try{
        await axios.post(`RUTA`,body,config)
        dispatch({
            type:PASSWORD_RESET_CONFIRM_SUCCESS
        })
    }catch(err){
        dispatch({
            type:PASSWORD_RESET_CONFIRM_FAIL
        })
    }
}



export const logout = ()=> dispatch =>{
    dispatch({
        type: LOGOUT
    })
}