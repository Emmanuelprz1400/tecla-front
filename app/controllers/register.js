document.getElementById("btn-registrarse").addEventListener("click", registro);

//declaracion de variable
var contenedorLoginRegistro = document.querySelector(".contenedorLoginRegistro")
var formLogin = document.querySelector(".formLogin")
var formRegistro = document.querySelector(".formRegistro")
var cajaTraseraRegistro = document.querySelector(".cajaTrasera-Registro")

function registro() {
        formRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "410px";
        formLogin.style.display = "none";
        cajaTraseraRegistro.style.opacity ="0";
} 
