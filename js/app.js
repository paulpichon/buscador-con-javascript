//variables
//donde se mostraran ls autos
const resultado = document.querySelector('#resultado');
//select marca
const marca = document.querySelector('#marca');
//select año
const year = document.querySelector('#year');
//select precio minimo
const minimo = document.querySelector('#minimo');
//select maximo
const maximo = document.querySelector('#maximo');
//select puertas
const puertas = document.querySelector('#puertas');
//select transmision
const transmision = document.querySelector('#transmision');
//select color
const color = document.querySelector('#color');
//año actual
const maxi = new Date().getFullYear();
//año actual menos 10 = 2022 - 10 = 2012
const min = maxi - 10;

//objeto donde se alamacenaran los select seleccionados como datos de busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//eventlistener
//cargar listeners
document.addEventListener('DOMContentLoaded', () =>  {
    //mostrar los autos desde la BD
    mostrarAutos( autos );
    //llenar select de años
    llenarSelect();
    //datos de busqueda
    marca.addEventListener('change', e => {
        //console.log( e.target.value );
        datosBusqueda.marca = e.target.value;
        //funcion para filtrar autos
        filtrarAutos();
    });
    year.addEventListener('change', e => {
        //console.log( e.target.value );
        datosBusqueda.year = parseInt( e.target.value );
        filtrarAutos();
    });
    minimo.addEventListener('change', e => {
        //console.log( e.target.value );
        datosBusqueda.minimo = parseInt( e.target.value );
        filtrarAutos();
    });
    maximo.addEventListener('change', e => {
        //console.log( parseInt( e.target.value ) );
        datosBusqueda.maximo = parseInt( e.target.value );
        filtrarAutos();
    });
    puertas.addEventListener('change', e => {
        //console.log( e.target.value );
        datosBusqueda.puertas = parseInt( e.target.value );
        filtrarAutos();
    });
    transmision.addEventListener('change', e => {
        //console.log( e.target.value );
        datosBusqueda.transmision = e.target.value;
        filtrarAutos();
    });
    color.addEventListener('change', e => {
        //console.log( e.target.value );
        datosBusqueda.color = e.target.value;
        filtrarAutos();
    });
});

//funciones
//mostrar los autos
function mostrarAutos( autos ) {
    //limpiar html
    limpiarHTML();
    //recorremos el arreglo
    autos.forEach( auto => {
        //destructuring
        const { color, marca, modelo, precio, puertas, transmision, year } = auto;
        //creamos un elemento HTML
        const autoHTML = document.createElement('p');
        //insertar textContent con la informacion sobre cada auto
        autoHTML.textContent = `
            ${ marca } ${ modelo } ${ year } ${ precio } - Puertas: ${ puertas } - Transmisión: ${ transmision } - Color: ${ color }
        `;
        //renderizar en el html
        resultado.appendChild( autoHTML );
    });
}
//funcion para limpiar html
function limpiarHTML() {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}
//llenar select de años
function llenarSelect() {
    //con un for creamos los años del 2022 al 2012
    for (let i = maxi; i >= min; i--) {
        //creamos un elemento option
        const option = document.createElement('option');
        //añadimos el value del option
        option.value = i;
        //añadimos el textContent que sera el año
        option.textContent = i;
        //donde sera renderizado
        year.appendChild( option );
    }
}
//funcion para filtrar por select seleccionada
function filtrarAutos() {
    //limpiar html
    limpiarHTML();
    //poner una funcion dentro del filter()
    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    //console.log( resultados );
    //motrar mensaje en caso de que no haya resultados
    if ( resultados.length ) {
        //renderizamos los auto en el html
        mostrarAutos( resultados );
    }else {
        ///funcion para mostrar mensaje 
        noResultado();
    }

}
///funcion para mostrar mensaje de no resultados
function noResultado() {
    //creamos mensaje
    const mensaje = document.createElement('p');
    mensaje.classList.add('border', 'error');
    mensaje.textContent = 'SIN RESULTADOS, CAMBIE LOS PARAMETROS DE BUSQUEDA';
    resultado.appendChild( mensaje );
}
//funcion para filtrar autos por marcas
function filtrarMarca( auto ) {
    //destructuring
    const { marca } = datosBusqueda;
    //verificamos si viene marca con un valor
    if ( marca ) {
        //retornamos los resultados filtrados
        return auto.marca === marca;
    }
    //retornamos el objeto completo
    return auto;
}
//funcion para filtrar por año
function filtrarYear( auto ) {
    //destructuring
    const { year } = datosBusqueda;
    //verificar si viene year con valor en datosBusqueda
    if ( year ) {
        //retornamos los resultados que han sido filtrados 
        return auto.year === year;
    }
    //retornamos el objeto auto completo
    return auto;
}
//funcion para filtrar por precio minimo
function filtrarMinimo( auto ) {
    //destructuring
    const { minimo } = datosBusqueda;
    //verificar si viene minimo con valor en datosBusqueda
    if ( minimo ) {
        //retornamos los resultados que han sido filtrados 
        return auto.precio >= minimo;
    }
    //retornamos el objeto auto completo
    return auto;
}
//funcion para filtrar por precio maximo
function filtrarMaximo( auto ) {
    //destructuring
    const { maximo } = datosBusqueda;
    //verificar si viene maximo con valor en datosBusqueda
    if ( maximo ) {
        //retornamos los resultados que han sido filtrados 
        return auto.precio <= maximo;
    }
    //retornamos el objeto auto completo
    return auto;
}
//funcion para filtrar por numero de púertas
function filtrarPuertas( auto ) {   
    //destructuring
    const { puertas } = datosBusqueda;

    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}
//funcion para filtrar por tipo de transmision
function filtrarTransmision( auto ) {
    //destructuring
    const { transmision } = datosBusqueda;
    
    if ( transmision ) {
        return auto.transmision === transmision;    
    }
    return auto;
}
//funcion para filtrar por color
function filtrarColor( auto ) {
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}