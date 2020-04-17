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
        // credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
        
    };

    return fetch('http://localhost:8000/api/login', requestOptions)
    .then(handleResponse)
    .then(response =>{
        if(response){
            localStorage.setItem('token', response.token);
            let id = JSON.parse(atob(response.token.split('.')[1])).userId;
            localStorage.setItem('id', id);
            let userrole = JSON.parse(atob(response.token.split('.')[1])).userRole;
            localStorage.setItem('role', userrole);
            let username = JSON.parse(atob(response.token.split('.')[1])).username;
            localStorage.setItem('username', username);
        }
        return response.token;
    });
}

function logout(){
    localStorage.removeItem('token');
}