import { signInWithGoogle } from '../../firebase/providers'
import {checkingCredentials} from './authSlice'

export const checkingAutentication =() =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const starGoogleSignIn=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
        signInWithGoogle()
    }
}