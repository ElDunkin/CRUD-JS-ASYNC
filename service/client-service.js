//abrir http(metodo,url)
//CRUD  - Metodos HTTP
//Create  POST 
//read    GET  
//update  PUT/PATCH
//delete  DELETE

//fetch API
const listaClientes = ()=> fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

const crearCliente = (nombre, email) =>{
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    })
}

const eliminarCliente = (id) =>
{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE",
    })
}

const detalleCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
}

const actualizarCliente = async (nombre,email,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email})
    })
    .catch((err) => console.log(err));
}

export const clientServices ={
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}




