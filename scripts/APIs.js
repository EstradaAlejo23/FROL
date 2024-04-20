const url = "http://localhost:3000/empresas";
let newId;
export const getCitas = async () => {
  try {
    const result = await fetch(url)
    const answer = await result.json()
    return answer;
  } catch (error) {
    
  }

};

let userId;

const citas = async () => {
  try {
    const result = await fetch(url);
    const answer = await result.json();
    userId = JSON.parse(localStorage.getItem("aliado")).id;
    let user;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].id===userId) {
        user = answer[i].id;
        break
      }      
    }
  } catch (error) {
    console.error('error', error.message)
    alert(error.message)
  }
};
citas()

export const newCita = async (cita) => {
  try {
    const urlBase = `http://localhost:3000/empresas/${userId}`;
    const ftch =await fetch(urlBase)
    const citaData = await ftch.json();
    if (!citaData.citas) {
      citaData.citas = [];
    };
    citaData.citas.push(cita);
    userId = JSON.parse(localStorage.getItem("aliado")).id;
    await fetch(urlBase,{
      method:"PUT",
      body: JSON.stringify(citaData),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location.href= 'aliados.html'
  } catch (error) {
    console.error("error", error.message);
    alert(error.message);
  }
}

