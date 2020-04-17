import React, {createContext, useReducer} from 'react';
import {authService} from '../_services/auth.service';

export const AuthContext = createContext({
    token: undefined,
    user: null,
    authenticated: false
});

const getUserFromToken = token =>{
    if(token){
        try{
            return JSON.parse(atob(token.split('.')[1]));
        }catch(error){

        }
    }
    return null;
}

const getRoleFromToken = token =>{
    if(token){
        try{
            return JSON.parse(atob(token.split('.')[1])).userRole;
        }catch(error){
            
        }
    }
}

export const AuthProvider = ({ children }) =>{
    let validToken = false;
    let token = authService.getIDToken();

    if(token){
        let exp = JSON.parse(atob(token.split('.')[1])).exp;
        if(Date.now() < exp*1000){
            validToken = true;
        }else{
            authService.logout();
        }
    }

    const initialState = validToken ? {
        token: token,
        user: getUserFromToken,
        role: getRoleFromToken,
        authenticated: true
    } : {
        token: undefined,
        user: null,
        role: null, 
        authenticated: false
    };

    const [state, setState] = useReducer((oldState, newState) => newState, initialState);

    const updateAuth = async () => {
        const token = (await authService.getIDToken()) || null;
        if (token && (token !== state.token)) {
          setState({
            token,
            user: getUserFromToken(token),
            role: getRoleFromToken(token),
            authenticated: true
          })
        } else if(token === null) {
          setState({
            token: undefined,
            user: null,
            role: null,
            authenticated: false
          })
        }
      }
    
    return (
        <AuthContext.Provider value={{ ...state, updateAuth }}>
            {children}
        </AuthContext.Provider>
    );
}