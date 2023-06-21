const consultasEnEspera = JSON.parse(localStorage.getItem("inmueble-en-consulta"));

const consultaVacia = document.querySelector("#consulta-vacia");
const contenedorConsulta = document.querySelector("#contenedor-consultas");
const consulta = document.querySelector("#consulta");
const consultaBotones = document.querySelector("#consulta-botones");
const consultado = document.querySelector("#consultado");
const botonCancelar = document.querySelector ("#consulta-cancelar")


if(consultasEnEspera) {
    consultaVacia.classList.add("disabled");
    contenedorConsulta.classList.remove("disabled");
    consulta.classList.remove("disabled");
    consultaBotones.classList.remove("disabled");
    consultado.classList.add("disabled")

    contenedorConsulta.innerHTML= "";

    consultasEnEspera.forEach(inmueble => {
        const div = document.createElement("div");
        div.classList.add("consulta-inmueble");
        div.innerHTML = `
        <img class= "inmuebles-imagen"src="${inmueble.imagen}" alt="${inmueble.titulo}" srcset="">
        <div class="consulta-inmuebles-titulo">
            <small>titulo</small>
            <h3>${inmueble.titulo}</h3>
        </div>
        <div class="consulta-inmuebles-precio">
            <small>precio</small>
            <h3>${inmueble.precio}</h3>
            <small> 12 cuotas!! </small>
            <h3>${inmueble.precio / "12"}</h3> 
        </div>`;

        contenedorConsulta.append(div);
    });


} else {
    consultaVacia.classList.remove("disabled");
    contenedorConsulta.classList.add("disabled");
    consulta.classList.add("disabled");
    consultaBotones.classList.add("disabled");
    consultado.classList.add("disabled")

}

//botonCancelar.addEventListener ("click" , vaciarConsulta);
//function vaciarConsulta(){
   // consultasEnEspera.length = 0;
   // localStorage.setItem("inmueble-en-consulta", JSON.stringify(consultasEnEspera));
   // cargarInmuebles()


//}