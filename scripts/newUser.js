import {newUser,getUsers} from "./api.js";

let formRegistar = document.querySelector('.formRegistar')
formRegistar.addEventListener('submit',validacion);

async function validacion(e){
    e.preventDefault();

    const users = await getUsers();
    console.log(users)
    let identidad = [...users].length + 1;
    let id = `${identidad}`;
    console.log(id) 
    
    let name = document.querySelector('.nameRegistro').value;
    let phoneNumber = document.querySelector('.numRegistro').value;
    let email = document.querySelector('.emailRegistro').value;
    let password = document.querySelector('.contRegistro').value;

    const user = {
        id,
        name,
        phoneNumber,
        email,
        password
    }
    
    newUser(user);
}