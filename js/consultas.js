let consultasEnEspera = localStorage.getItem(".inmueble-en-consulta");
consultasEnEspera = JSON.parse(consultasEnEspera);

const consultaVacia = document.querySelector("#consulta-vacia");
const contenedorConsulta = document.querySelector("#contenedor-consultas");
const consulta = document.querySelector("#consulta");
const consultaBotones = document.querySelector("#consulta-botones");
const consultado = document.querySelector("#consultado");
const botonCancelar = document.querySelector ("#consulta-cancelar");
const formulario = document.querySelector('#formulario')
const botonEnviar = document.querySelector('#consulta-enviar')

function cargarinmueblesEnConsulta(){
if(consultasEnEspera && consultasEnEspera.length > 0){


    consultaVacia.classList.add("disabled");
    contenedorConsulta.classList.remove("disabled");
    consulta.classList.remove("disabled");
    consultaBotones.classList.remove("disabled");
    consultado.classList.add("disabled")

    contenedorConsulta.innerHTML= "";

    consultasEnEspera.forEach(inmueble => {
        const div = document.createElement("div");
        div.classList.add(".consulta-inmueble");
        div.innerHTML = `
        <img class= "inmueble-imagen img"src="${inmueble.imagen}" alt="${inmueble.titulo}" srcset="">
        <div class="consulta-inmuebles-titulo">
            <h1 class="titulo" >Titulo</h1>
            <h3 class="titulo" >${inmueble.titulo}</h3>
        </div>
        <div class="consulta-inmuebles-precio">
            <h1 class="titulo">Precio</h1>
            <h3 class="titulo">${inmueble.precio}</h3>
            <h1 class="titulo"> 12 cuotas!! </h1>
            <h3 class="titulo">${inmueble.precio / "12"}</h3> 
        </div>`;

        contenedorConsulta.append(div);
    })



} else {
    consultaVacia.classList.remove("disabled");
    contenedorConsulta.classList.add("disabled");
    consulta.classList.add("disabled");
    consultaBotones.classList.add("disabled");
    consultado.classList.add("disabled");

}}

cargarinmueblesEnConsulta();

botonCancelar.addEventListener("click",vaciarConsulta);
function vaciarConsulta(){

    consultasEnEspera.length = 0;
    localStorage.setItem(".inmueble-en-consulta", JSON.stringify(consultasEnEspera));
    cargarinmueblesEnConsulta();

}




formulario.addEventListener("submit", enviarFormulario)

function enviarFormulario (){
    alert();
    
    consultasEnEspera.length = 0;
    localStorage.setItem(".inmueble-en-consulta", JSON.stringify(consultasEnEspera));

    consultaVacia.classList.add("disabled");
    contenedorConsulta.classList.add("disabled");
    consulta.classList.add("disabled");
    consultaBotones.classList.add("disabled");
    consultado.classList.remove("disabled");
    formulario.classList.add("disabled");


}

const nombre = document.querySelector ("#nombre").value
// const apellido = document.querySelector ("#apellido").value
// const consulta = document.querySelector ("#texto").value

const alert= async()=>{    const { value: email } = await Swal.fire({
    input: 'email',
    icon: 'success',
    title: ` Gracias ${nombre}`,
    text: 'Ingresa tu email',
    confirmButtonText: "cerrar",

});
if (email) {
    Swal.fire(`Entered email: ${email}`)
};
}

