/*Importamos la base de datos de los usuarios*/
import {getUsers} from "./api.js";

/* document.addEventListener("DOMContentLoaded", ); */

/*Declaracion de variables para los formularios del header*/
let formIngresar = document.querySelector('.formIngresar');
let formRegistar = document.querySelector('.formRegistar');
let formRecuperar = document.querySelector('.formRecuperar');
let irIngresar = document.querySelector('.irIngresar');
let olvidoIr = document.querySelector('.olvidoIr');
let irRegistrar = document.querySelector('.irRegistrar');
let irRecuperar = document.querySelector('.irRecuperar');
let modalTitle = document.querySelector('.modal-title');
let pantallaContainer = document.querySelector('.pantallaContainer');
let recContainer = document.querySelector('.recContainer');
let logueado;
const userLogin = {
    id:0, 
    name:""
}



/*ir de ingresar a registrarse */
irIngresar.addEventListener('click',(e)=>{
    e.preventDefault();
    modalTitle.innerHTML = 'Formulario de registro';
    pantallaContainer.innerHTML = '';
    formIngresar.style.display = 'none';
    formRegistar.style.display = 'flex';
})

/*ir de iniciar sesion a recuperar contraseña */
olvidoIr.addEventListener('click', (e) => {
    e.preventDefault();
    modalTitle.innerHTML = 'Formulario de Recuperar Contraseña';
    pantallaContainer.innerHTML = '';
    formIngresar.style.display = 'none';
    formRecuperar.style.display = 'flex';
})

/*devolverse de registrar a iniciar sesion */
irRegistrar.addEventListener('click', (e) => {
    e.preventDefault();
    pantallaContainer.innerHTML = '';
    modalTitle.innerHTML = 'Formulario de Ingreso';
    formRegistar.style.display = 'none';
    formIngresar.style.display = 'flex';
})

/*devolverse de recuperar contraseña a iniciar sesion */
irRecuperar.addEventListener('click', (e) => {
    e.preventDefault();
    pantallaContainer.innerHTML = '';
    modalTitle.innerHTML = 'Formulario de Ingreso';
    formRecuperar.style.display = 'none';
    formIngresar.style.display = 'flex';
})

/*Funcion y evento para iniciar sesion */
formIngresar.addEventListener('submit',validarIngreso);

async function validarIngreso(e){
    e.preventDefault();
    let emailIngreso = document.querySelector('.emailIngreso').value;
    let paswIngreso = document.querySelector('.paswIngreso').value;
    let comprobar = false;
    let users = await getUsers();

    
    users.forEach(user => {
        if(user.email === emailIngreso && user.password === paswIngreso){
            pantallaContainer.innerHTML = "";
            userLogin.name = user.name;
            userLogin.id = user.id;
            logueado = true;
            localStorage.setItem('logueado',logueado);
            localStorage.setItem('userLogin',JSON.stringify(userLogin));
            window.location.href = 'index.html';
            comprobar = true;
            return 
        }
    });
    if (!comprobar) {
        logueado = false;
        localStorage.setItem('logueado', logueado)
        pantallaContainer.innerHTML = `<p>usuario o contraseña incorreto</p>`;
        return
    }
}

/*funcion para recuperar la contraseña */
formRecuperar.addEventListener('submit',recuperarPassword);

async function recuperarPassword(e){
    e.preventDefault();

    let emailRecuperar = document.querySelector(".emailRecuperar").value;
    let users = await getUsers();
    let comprobar = false;
    


    users.forEach(user =>{
        if(emailRecuperar === user.email){
            pantallaContainer.innerHTML = '';
            recContainer.innerHTML = user.password;
            comprobar = true;
            return
        }
    });
    if(!comprobar){
        recContainer.innerHTML = "";
        pantallaContainer.innerHTML = 'Este mail no existe';
        return
    }
}














