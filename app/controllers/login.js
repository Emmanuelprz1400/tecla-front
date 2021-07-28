import { AuthService } from "../services/auth.js";

const authService = new AuthService();

const form = document.getElementById('form');


form.addEventListener('submit', login);

async function login (e) {
    e.preventDefault();
    const email = form['email'].value;
    const password = form['password'].value;
    const data  = await authService.login({email, password});

    console.log(data);
}