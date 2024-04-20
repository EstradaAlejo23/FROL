let cerrarSesion = document.querySelector('.cerrarSesion');
let nombreLogin = document.querySelector('.nombreLogin');
let loginLogo = document.querySelector('.loginLogo')
let acceder = document.querySelector('#acceder');
let logueado;
let userLogin;
document.addEventListener("DOMContentLoaded",validarIngreso);

function validarIngreso(){
    let logueado = JSON.parse(localStorage.getItem('logueado'));
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    let nombre = userLogin.name;

    if(logueado){
        loginLogo.style.display = 'block';
        acceder.style.display = 'none';
        cerrarSesion.style.display = 'block';
        nombreLogin.innerHTML = nombre;
    }
}

cerrarSesion.addEventListener('click',()=>{
    console.log('entro')
    logueado = false
    localStorage.setItem('logueado',logueado);
    window.location.reload();
})
