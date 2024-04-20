import {getEmpresas } from "./api.js";

/*declaracion de carga del documento DOM */
document.addEventListener("DOMContentLoaded", getDataEmpresas);
/*Decalracion de globales*/
const ciudad = document.querySelector('#cdd');
const nombre = document.querySelector('#srv');
let empresas;

async function getDataEmpresas() {
    empresas = await getEmpresas();
    showBarbers(empresas)
}

/* Declaracion de objeto para criterio de búsqueda */
const criterioBusqueda = {
    ciudad: '',
    nombre: ''
}

/* eventListener para capturar los input de buscar*/

ciudad.addEventListener('input', (e) => {
    criterioBusqueda.ciudad = e.target.value
    filterService()
})

nombre.addEventListener('input', (e) => {
    criterioBusqueda.nombre = e.target.value
    filterService()
})


/*funcion mostrar cartas empresas */
function showBarbers(companies) {
    const contenedor = document.querySelector('.cardsContainer');
    limpiar()
    companies.forEach((company) => {
        const { id, imageUrl, name, ubicacion, email, password, description, tipoNegocio, petFriendly, instrucciones } = company;
        const populares = document.createElement('p');
        populares.innerHTML = `
            <div class="card">
                <img src="${imageUrl}" class="imgCard" alt="..." email="${email}" contraseña="${password}" ids = "${id}" descrip="${description}" tpNeg="${tipoNegocio}" pet="${petFriendly}" inst="${instrucciones}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${ubicacion}</p>
                </div>
            </div>   
        `;
        contenedor.appendChild(populares);
    })
}

/* declaracion de funcion filterService */
function filterService() {
    const busqueda = empresas
        .filter(filtrarNombre)
        .filter(filtrarCiudad);
    showBarbers(busqueda)
}


/* funcion de filtrado */
function filtrarCiudad(popular) {
    if (criterioBusqueda.ciudad) {
        return popular.ubicacion.toLowerCase() === criterioBusqueda.ciudad.toLowerCase();
    } else {
        return popular;
    }
}

function filtrarNombre(popular) {
    if (criterioBusqueda.nombre) {
        return popular.name.toLowerCase() === criterioBusqueda.nombre.toLowerCase();
    } else {
        return popular;
    }
}

function limpiar() {
    const parrafos = document.querySelectorAll('p');
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].remove();
    }
}

const cards = document.querySelector(".cardsContainer")

cards.addEventListener("click", selectedCard)

function selectedCard(e) {
    console.log(e)
    e.preventDefault();
    if (e.target.classList.contains("imgCard")) {
        const electedCompany = e.target.parentElement.parentElement;
        console.log(electedCompany);
        details(electedCompany);
    }
}

/*seleccionar una carta y redirige a aliados */
let arrayDetails = [];

function details(electedCompany) {
    const detailsCompany = {
        imagen: electedCompany.querySelector("img").src,
        nombre: electedCompany.querySelector("h5").textContent,
        ubicacion: electedCompany.querySelector("p").textContent,
        email: electedCompany.querySelector("img").getAttribute("email"),
        contraseña: electedCompany.querySelector("img").getAttribute("contraseña"),
        id: electedCompany.querySelector("img").getAttribute("ids"),
        description: electedCompany.querySelector("img").getAttribute("descrip"),
        tipoNegocio: electedCompany.querySelector("img").getAttribute("tpNeg"), 
        petFriendly: electedCompany.querySelector("img").getAttribute("pet"), 
        instrucciones: electedCompany.querySelector("img").getAttribute("inst"),
    };

    arrayDetails = detailsCompany;
    localStorage.setItem('aliado', JSON.stringify(arrayDetails));
    window.location.href = './aliados.html';
}