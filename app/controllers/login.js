let form = document.getElementById('formLogin');
let email = document.getElementById('correoLogin');
let pass = document.getElementById('passwordLogin');

class Login {
    constructor(email, pass){
        this.email = email,
        this.pass = pass,
        this.id = "",
        this.nombre = "",
        this.usuario = "",
        this.tipo = "",
        this.token = ""
    }

    static async guardaUsuario (usuario) {
        localStorage.setItem("dataUsuario", JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    Login.guardaUsuario(new Login(emailL.value, passL.value));
    let resultado = await fetch("http://localhost:3000/login", { 
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            "email": emailL.value,
            "pass": passL.value
        })
    })
    let vuelta = await resultado.json();
    if(vuelta.error){
        swal({
            title: `${vuelta.error}`,
            icon: "error",
          });
    } else {
        let data = await Login.recuperaUsuario();
        data.tipo = vuelta.user.tipo_usuario;
        data.usuario = vuelta.user.usuario;
        data.nombre = vuelta.user.nombres + " " + vuelta.user.apellidos;
        data.token = vuelta.token;
        data.id = vuelta.user.id;
        Login.guardaUsuario(data);
        location.href = "../index.html"
    }
})