import { LocalStorageService } from "./LocalStorage.js"

import {
    authApi
} from "../globals/apiPaths.js";

export const validateSession = () => {
    const token = LocalStorageService.getItem('token');
    if (token.error) {
        return location.replace('http://127.0.0.1:5500/login.html') 
    }
    return true
}


export class AuthService {
    async login(body = {}) {
        console.log(body);
        const userAndToken = await fetch(`${authApi()}`, {
            method: 'post',
            body,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        return await userAndToken.json();    
    }
}