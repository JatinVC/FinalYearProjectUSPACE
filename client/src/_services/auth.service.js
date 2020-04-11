import { handleResponse } from "../_helpers/handle-response";

export const authService = {
    login,
    logout,
    getIDToken
};

function getIDToken(){
    return localStorage.getItem('token');
}

function login(username, password){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch('http://localhost:8000/api/login', requestOptions)
    .then(handleResponse)
    .then(response =>{
        if(response){
            localStorage.setItem('token', response.token);
        }
        return response.token
    });
}

function logout(){
    localStorage.removeItem('token');
}