import { getCitas } from "../scripts/APIs.js";
/* Selectores */

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#lastName");
const dateCita = document.querySelector("#datecite");
const timeCita = document.querySelector("#timecite");
/* const service = document.querySelector("#description") */


const saveInfo = {
  names: "",
  lastName: "",
  dateCita: "",
  timeCita: "",
  service:""
};

nombre.addEventListener("input", (e) => {
  saveInfo.names = e.target.value;
});

apellido.addEventListener("input", (e) => {
  saveInfo.lastName = e.target.value;
});

dateCita.addEventListener("input", (e) => {
  saveInfo.dateCita = e.target.value;
});

timeCita.addEventListener("input", (e) => {
  saveInfo.timeCita = e.target.value;
});

/* service.addEventListener('input', (e) => {
  saveInfo.description = e.target.value
}) */

  
(()=>{
  document.addEventListener('DOMContentLoaded',showCitas)
  async function showCitas() {
    const citas = await getCitas();
    const containerCita = document.querySelector('#containerCita');
    citas.forEach(cita => {
      if (cita.id === JSON.parse(localStorage.getItem('aliado')).id) {
        cita.citas.forEach(element => {
          const { nombre, apellido, timeCita, dateCita, servicio} = element;
          if (nombre === '') {
            containerCita.innerHTML = ""
          } else {
            containerCita.innerHTML += `
              <div class="card card_cite">
                  <div class="card-body">
                    <h5 class="card-title fs-3 fw-bold">${nombre}</h5>
                    <p class="card-text">
                      <div class="d-flex gap-2">
                        <span class="fw-bold">Apellido:</span>
                        <span>${apellido}</span>
                      </div>
                      <div class="d-flex gap-2">
                        <span class="fw-bold">Fecha:</span>
                        <span>${dateCita}</span>
                      </div>
                      
                      <div class="d-flex gap-2">
                        <span class="fw-bold">Hora:</span>
                        <span>${timeCita}</span>
                      </div>
                      <div class="d-flex gap-2">
                        <span class="fw-bold">Servicio:</span>
                        <span>${servicio}</span>
                      </div>
                    </p>
                    <div class="d-flex gap-2">
            `
          }
          
        });
        
      }
    });
  }
  
})();

