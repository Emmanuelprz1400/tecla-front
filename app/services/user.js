import {
    usersApi
} from "../globals/apiPaths.js";

import { LocalStorageService } from "./LocalStorage.js";


export class UserService {

    async createUser(body){
        const newUser = await fetch(`${usersApi()}`, {
            method: 'post',
            body,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${LocalStorageService.getItem('token')}`
            }
        });
        return await newUser.json();    
    }

}