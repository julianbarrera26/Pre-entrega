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
    formulario.classList.add("disabled");


}}

cargarinmueblesEnConsulta();

botonCancelar.addEventListener("submit",vaciarConsulta);
function vaciarConsulta(){

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${consultasEnEspera.reduce((acc, inmueble) => acc + inmueble.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        timerProgressBar:true,
    }).then((result) => {
        if (result.isConfirmed) {
            consultasEnEspera.length = 0;
            localStorage.setItem("inmueble-en-consulta", JSON.stringify(consultasEnEspera));
            cargarProductosCarrito();
        }
    })

    // consultasEnEspera.length = 0;
    // localStorage.setItem(".inmueble-en-consulta", JSON.stringify(consultasEnEspera));
    // cargarinmueblesEnConsulta();

}




formulario.addEventListener("submit", enviarFormulario)

function enviarFormulario (){
    
    const nombre = document.querySelector ("#nombre").value
    const apellido = document.querySelector ("#apellido").value
    const consulta = document.querySelector ("#texto").value

    alert(nombre,apellido);
    
    consultasEnEspera.length = 0;
    localStorage.setItem(".inmueble-en-consulta", JSON.stringify(consultasEnEspera));

    consultaVacia.classList.add("disabled");
    contenedorConsulta.classList.add("disabled");
    consulta.classList.add("disabled");
    consultaBotones.classList.add("disabled");
    consultado.classList.remove("disabled");
    formulario.classList.add("disabled");


}



const alert= async()=>{    const { value: email } = await Swal.fire({
    input: 'email',
    icon: 'success',
    title: ` Gracias ${nombre}`,
    text: 'Ingresa tu email',
    confirmButtonText: "cerrar",
    timer:30000, 
    timerProgressBar: true,

});
if (email) {
    Swal.fire(`Entered email: ${email}`)
};
}

