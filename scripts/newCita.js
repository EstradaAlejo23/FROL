import { newCita } from "../scripts/APIs.js";

const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', validateCita);

function validateCita(e) {
    e.preventDefault()
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#lastName").value;
    const dateCita = document.querySelector("#datecite").value;
    const timeCita = document.querySelector("#timecite").value;
    const servicio = document.querySelector("#service").value;
    const cita = {
        nombre,
        apellido,
        timeCita,
        dateCita,
        servicio
    }

    if (validate(cita)) {
        alert('Todos los campos son obligatorios!!');
        return;
    }
    newCita(cita);

};

function validate(objeto) {
    return !Object.values(objeto).every(element => element !== "")
}