//Se configura que información se va a guardar 
import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    //objeto
    name: 'auth',
    //objeto anidado (objeto dentro de otro objeto)
    initialState:{
        status: 'not-authenticated',
        uid: null, //identificación unica como usuario
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers:{
        login:(state, action)=>{

        },
        logout:(state, payload)=>{

        },
        checkingCredentials:(state)=>{
            state.status='checking'
        }
    }
});

export const {login, logout, checkingCredentials} =authSlice.actions;