const HOST = 'localhost';
const PORT = 3010;
const ENDPOINT = 'canciones';
let CancionAeliminar = '';
let CancionAeditar='';
const Modal = document.getElementById('exampleModal');
const tbody = document.getElementById('tbody');
const btnEliminar = document.getElementById('btnEliminar');
const btneditarCancion = document.getElementById('btneditar');
const btnAgregarCancion = document.getElementById('btnagregar');

function CargarCanciones(){    

    fetch(`http://${HOST}:${PORT}/${ENDPOINT}`)
    .then(data => data.json())
    .then(result => {
     let Fila ='';
        result.forEach((cancion,index) => {            
        
          Fila += `<tr class="align-middle">
                            <th scope="row">${ index + 1 }</th>
                                <td>${ cancion.titulo }</td>
                                <td>${ cancion.artista }</td>
                                <td>${ cancion.tono }</td>
                                <td class="text-center">

                                    <button class="btn btn-warning btnEditar">
                                        <img class="iconobBotones" src="/public/images/editar.png" alt="icono editar">
                                        Editar
                                    </button>

                                    <button id="btnEliminar" class="btn btn-danger" onclick="showModal(${ cancion.id })">
                                        <img class="iconobBotones" src="/public/images/eliminar.png" alt="icono eliminar">
                                        Eliminar
                                    </button>

                                </td>
                      </tr>`
        });

        tbody.innerHTML = Fila;    
        editarCancion();
    });

};

let myModal;

function showModal(id) {

    CancionAeliminar = id;
    myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();

}

function EliminarCancion(){       

    try {

        fetch(`http://localhost:3010/cancion/${CancionAeliminar}`, {
            method: 'DELETE'
        })

        myModal.hide();

        window.location.href = '/';
          
    } catch (error) {

       console.log(`X Error al eliminar la canción: ` , error) ;

    }

};    

btneditarCancion.addEventListener('click',(e)=>{

    e.preventDefault();

    console.log("Entro a editar")

    const Nombre = document.getElementById('nombreCancion').value;
    const Artista = document.getElementById('nombreArtista').value;
    const Tono = document.getElementById('nombreTono').value;

    try {
        
        fetch(`http://${HOST}:${PORT}/cancion`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nombre: Nombre,
                Artista: Artista,
                Tono: Tono,
                tituloOriginal:tituloOriginal,
                artistaOriginal:artistaOriginal,
                tonoOriginal:tonoOriginal
            })
        })

        window.location.href = '/';
        
    } catch (error) {

        console.log(`X Error al  actualizar la cancion :` , error)

    }

});

let tituloOriginal = '';
let artistaOriginal ='';
let tonoOriginal ='';
    
function handleEditButtonClick(event) {

    let button = event.currentTarget;
    let fila = button.closest('tr');

    tituloOriginal = fila.cells[1].textContent;
    artistaOriginal = fila.cells[2].textContent;
    tonoOriginal = fila.cells[3].textContent;

    btnAgregarCancion.style.display = 'none';
    btneditarCancion.style.display = 'block';

    document.getElementById('nombreCancion').value = tituloOriginal;
    document.getElementById('nombreArtista').value = artistaOriginal;
    document.getElementById('nombreTono').value = tonoOriginal;

}

function editarCancion() {
    
    let buttons = document.querySelectorAll('.btnEditar');

    buttons.forEach(function(button) { 

         button.removeEventListener('click', handleEditButtonClick);
         button.addEventListener('click', handleEditButtonClick);

    });
    
}

addEventListener("DOMContentLoaded", (event) => {

     CargarCanciones();

});