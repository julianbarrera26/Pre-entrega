inmuebles = [
    {
        id:"casa-1",
        titulo: "casa 2 dormitorios",
        imagen:"./img/1.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Casas",
            id:"casas"
        },
        precio:80000
    },
    {
        id:"casa-2",
        titulo: "casa centrica",
        imagen:"./img/1.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Casas",
            id:"casas"
        },
        precio:70000
    },
    {
        id:"casa-3",
        titulo: "casa barrio alberdi",
        imagen:"./img/1.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Casas",
            id:"casas"
        },
        precio:90000
    },
    {
        id:"casa-4",
        titulo: "casa 1 dormitorio",
        imagen:"./img/1.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Casas",
            id:"casas"
        },
        precio:100000
    },
    {
        id:"depto-1",
        titulo: "depto 2 dormitorios",
        imagen:"./img/2.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Departamentos",
            id:"departamentos"
        },
        precio:50000
    },
    {
        id:"depto-2",
        titulo: "depto barrio jardin",
        imagen:"./img/2.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Departamentos",
            id:"departamentos"
        },
        precio:80000
    },
    {
        id:"depto-3",
        titulo: "depto con balcon",
        imagen:"./img/2.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Departamentos",
            id:"departamentos"
        },
        precio:80000
    },
    {
        id:"depto-4",
        titulo: "depto 2 dormitorios",
        imagen:"./img/2.jpg",
        descripcion: "loasundkasndandasnoasndoa",
        clasificacion: {
            nombre:"Departamentos",
            id:"departamentos"
        },
        precio:90000
    },

];

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

cargarInmuebles(inmuebles);




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

function consultar(e) {
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
