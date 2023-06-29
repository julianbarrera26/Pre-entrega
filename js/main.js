let inmuebles = [];

fetch("./js/inmuebles.json")
    .then(response => response.json())
    .then(data => {
        inmuebles = data;
        cargarInmuebles(inmuebles);
    });
    


const contenedorInmueble = document.querySelector("#contenedor-inmuebles");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
let consultarInmueble = document.querySelectorAll(".inmueble-consultar")


function cargarInmuebles(inmuebles) {

    contenedorInmueble.innerHTML = "";
    
    inmuebles.forEach(inmueble => {
        const div = document.createElement("div");
        div.classList.add("inmueble");
        div.innerHTML = `
        <img class="inmueble-imagen" src="${inmueble.imagen}" alt="${inmueble.titulo}-">
            <div class="inmueble-detalles">
                <h3 class="inmueble-titulo">${inmueble.titulo}</h3>
                <p class="inmueble-precio">${inmueble.precio}</p>
                <button class="inmueble-consultar" id="${inmueble.id}">Consultar</button>
            </div>`;

        contenedorInmueble.append(div);

        
    })
    botonesConsultar()
}






botonesCategoria.forEach(boton => {
    boton.addEventListener("click",(e) =>{

        e.currentTarget.classList.add("active");

            const inmueblesBoton = inmuebles.filter(inmueble=> inmueble.clasificacion.id === e.currentTarget.id);
            cargarInmuebles(inmueblesBoton);
    
    });
})




function botonesConsultar() {
    consultarInmueble = document.querySelectorAll(".inmueble-consultar");

    consultarInmueble.forEach(boton => {
        boton.addEventListener("click", consultar);
    });
}
let inmuebleEnConsulta = [];
const consultasEnEsperaLS = localStorage.getItem("inmueble-en-consulta");


if(consultasEnEsperaLS){
    inmuebleEnConsulta = JSON.parse(consultasEnEsperaLS);
}
else{
    inmuebleEnConsulta = [];
}

function consultar(e) {
    Swal.fire({
        title: '<strong>GENIAL!! <u></u></strong>',
        icon: 'success',
        html:
        'Ya seleccionaste tu inmueble con EXITO!! ' +
        '<b> Dirigete a </b><a href="/consultas.html">Consultas</a> ' +
        'o sigue seleccionando inmuebles ',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> EXCELENTE!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    })

    const botonId = e.currentTarget.id;
    const inmuebleConsulta = inmuebles.find (inmueble => inmueble.id === botonId);
    if(inmuebleEnConsulta.some(inmueble => inmueble.id === botonId)) {
        const index = inmuebleEnConsulta.findIndex(inmueble => inmueble.id === botonId);
        inmuebleEnConsulta[index].cantidad++;

    } else {
        inmuebleConsulta.cantidad = 1;
        inmuebleEnConsulta.push(inmuebleConsulta);
    }
        
    localStorage.setItem("inmueble-en-consulta",JSON.stringify(inmuebleEnConsulta));


}
