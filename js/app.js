//variables
const resultado = document.querySelector('#resultado');
//input marca
const marca = document.querySelector('#marca');
//input year
const year = document.querySelector('#year');
//input minimo
const minimo = document.querySelector('#minimo');
//input maximo
const maximo = document.querySelector('#maximo');
//input puertas
const puertas = document.querySelector('#puertas');
//input transmision
const transmision = document.querySelector('#transmision');
//input color
const color = document.querySelector('#color');
//variables para el select año
//año actual
const maxi = new Date().getFullYear();
//año minimo
const min = maxi - 10;
//datos busqueda
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//eventlistener
eventListeners();
function eventListeners() {
    //mostrar autos
    mostrarAutos( autos );
    //llenar select de años
    llenarSelect();
    //busqueda
    marca.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.marca = e.target.value;
        //funcion para filtrar autos
        filtrarAutos();
    });
    year.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.year = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    minimo.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.minimo = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    maximo.addEventListener('change', ( e ) => {
        //console.log( parseInt( e.target.value ) );
        datosBusqueda.maximo = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    puertas.addEventListener('change', ( e ) => {
        //console.log( parseInt( e.target.value ) );
        datosBusqueda.puertas = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    transmision.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.transmision = e.target.value;
        //funcion para filtrar autos
        filtrarAutos();
    });
    color.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.color = e.target.value;
        //funcion para filtrar autos
        filtrarAutos();
    });
}

//funciones
function mostrarAutos( autos ) {
    //limpiar el html anterior
    limpiarHTML();
    //con un foreach recorremos el array
    autos.forEach( auto => {
        //destructuring
        const {color, marca, modelo, precio, puertas, transmision, year } = auto;
        //construir html
        const autoHTML = document.createElement('p');
        //innerhtml
        autoHTML.textContent = `${marca} ${modelo} ${year} $${precio} - Puertas: ${puertas} - Transmision: ${transmision} - Color: ${color}`;
        //renderizar
        resultado.appendChild( autoHTML );
    });
}
//funcion para filtrar autos
function filtrarAutos() {
    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    //renderizar
    if ( resultados.length > 0 ) {
        mostrarAutos( resultados );
    }else {
        //funcion para mostrar mensaje
        mostrarMensaje('NO HAY RESULTADOS, CAMBIAR LOS PARAMETROS DE BUSQUEDA');
    }
}
//funcion para filtrar por marca
function filtrarMarca( auto ) {
    //destructuring
    const { marca } = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}
//funcion para filtrar por year
function filtrarYear( auto ) {
    //destructuring
    const { year } = datosBusqueda;
    if ( year ) {
        return auto.year === year;
    }
    return auto;
}
//funcion para filtrar por precio minimo
function filtrarMinimo( auto ) {
    //destructuring
    const { minimo } = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}
//funcion para filtrar por precio maximo
function filtrarMaximo( auto ) {
    //destructuring
    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}
//funcion para filtrar por puertas
function filtrarPuertas( auto ) {
    //destructuring
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}
//funcion para filtrar por transmision
function filtrarTransmision( auto ) {
    //destructuring
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}
//funcion para filtrar por COLOR
function filtrarColor( auto ) {
    //destructuring
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}
//funcion para mostrar mensaje
function mostrarMensaje( mensaje ) {
    //limpiar el html anterior
    limpiarHTML();
    //construir el html
    const mensajeHTML = document.createElement('p');
    //clase
    mensajeHTML.classList.add('error');
    //texcontent
    mensajeHTML.textContent = mensaje;
    //renderizar
    resultado.appendChild( mensajeHTML );
}
//funcion para mostrar los años en el select
function llenarSelect() {
    //con un for creamos los años
    for (let i = maxi; i >= min; i--) {
        //construir el html
        const option = document.createElement('option');
        //texcontent
        option.textContent = i;
        //value
        option.value = i;
        //renderizar
        year.appendChild( option );
    }
}
//funcion para limpiar el html anterior
function limpiarHTML() {
    while( resultado.firstChild ){
        resultado.removeChild( resultado.firstChild );
    }
}