let infoAliado = JSON.parse(localStorage.getItem('aliado'));
let btnReservar = document.querySelector('.botonReserva');


function rellenarAliados() {
    const { imagen, description, tipoNegocio, petFriendly, instrucciones, nombre, ubicacion } = infoAliado //destructuracion de datos
    const imgAliado = document.querySelector(".imgAliado");
    const descrip = document.querySelector(".descrip");
    const tpNeg = document.querySelector(".tpNeg");
    const pet = document.querySelector(".pet");
    const instru = document.querySelector(".instrucc");
    let nombreAliado = document.querySelector(".nombreAliado");
    let ubicacionAliado = document.querySelector(".ubicacionAliado");
    imgAliado.innerHTML = `
    <img src="${imagen}" alt="" >
    `
    instru.textContent = `${instrucciones}`
    pet.textContent = `${petFriendly}`
    tpNeg.textContent = `${tipoNegocio}`
    descrip.textContent = `${description}`
    nombreAliado.textContent = `${nombre}`;
    ubicacionAliado.textContent = `${ubicacion}`;
}

rellenarAliados();

btnReservar.addEventListener("click",()=>{
    let bodie = document.querySelector('.bodie');
    bodie.style.display = "flex";
})