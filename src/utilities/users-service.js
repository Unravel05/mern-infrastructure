// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';


export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  // TODO: return user object from token instead
  // Persist the "token"
  localStorage.setItem('token', token);
  
}

export async function login(credentials){
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser()
}

export async function logOut() {
    localStorage.removeItem('token')
}


export function getToken() {
    const token = localStorage.getItem('token')
    //No token exist
    //user state set to null
    if (!token) return null;
    //Valid token exists
    //Get the user from the token
    //Set user state to the user object
    const payload = JSON.parse(atob(token.split('.')[1]));
    // Token exists, but it's expired
    //Set user state to null
    //remove the token from storage
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export const checkToken = async() => {
    return usersAPI.checkToken()
    // checkToken returns a string, but let's 
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));
}
