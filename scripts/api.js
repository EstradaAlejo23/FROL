const urlEmpresas = 'http://localhost:3000/empresas';
const urlUsers = 'http://localhost:3000/users';

export const getEmpresas = async () => {
    try {
        const resultEmpresas = await fetch(urlEmpresas);
        const apiEmpresas = await resultEmpresas.json();
        return apiEmpresas
    } catch (error) {
        console.log("Error: " + error)
    }
}

export const getUsers = async () => {
    try {
        const resultUsers = await fetch(urlUsers);
        const apiUsers = await resultUsers.json();
        return apiUsers
    } catch (error) {
        console.log("Error: " + error)
    }
}

export const newUser = async(user)=>{
    try{
        await fetch(urlUsers,{
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'}
        });
    } catch (error) {
       console.log("Error: " + error) 
    }
}