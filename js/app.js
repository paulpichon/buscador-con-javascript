//variables
//resultados
const resultados = document.querySelector('#resultado');
//select marca
const marca = document.querySelector('#marca');
//select year
const year = document.querySelector('#year');
//select minimo
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
//año minimo
const min = maxi - 10;

//objeto con los datos de busqueda vacios
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//eventlisteners
//cargar listeners
document.addEventListener('DOMContentLoaded', () => {
    //mostrar autos
    mostrarAutos( autos );
    //funcion para mostrar años en el select
    llenarSelect();
    //filtrarAutos
    marca.addEventListener('change', e => {
        //console.log( e.target.value );
        //insertar el e.target.value al objeto
        datosBusqueda.marca = e.target.value;
        //funcion para filtrar autos
        filtrarAutos();
    });
    year.addEventListener('change', e => {
        //console.log( e.target.value );
        //insertar el e.target.value al objeto
        datosBusqueda.year = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    minimo.addEventListener('change', e => {
        //console.log( e.target.value );
        //insertar el e.target.value al objeto
        datosBusqueda.minimo = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    maximo.addEventListener('change', e => {
        //console.log( e.target.value );
        //insertar el e.target.value al objeto
        datosBusqueda.maximo = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    puertas.addEventListener('change', e => {
        //console.log( e.target.value );
        //insertar el e.target.value al objeto
        datosBusqueda.puertas = parseInt( e.target.value );
        //funcion para filtrar autos
        filtrarAutos();
    });
    transmision.addEventListener('change', e => {
        //console.log( e.target.value );
        //insertar el e.target.value al objeto
        datosBusqueda.transmision = e.target.value;
        //funcion para filtrar autos
        filtrarAutos();
    });
    color.addEventListener('change', e => {
        //console.log( e.target.value );
        //insertar el e.target.value al objeto
        datosBusqueda.color = e.target.value;
        //funcion para filtrar autos
        filtrarAutos();
    });
});

//funciones
//mostrar autos
function mostrarAutos( autos ) {
    //limipiar html anterior
    limpiarHTML();
    //recorrer el array para mostrarlos en el html
    autos.forEach( auto => {
        //destructuring
        const { color, marca, modelo, precio, puertas, transmision, year } = auto;
        //construimos un elemento html
        const autoHTML = document.createElement('p');
        //insertar textcontent
        autoHTML.textContent = `${ marca } ${ modelo } ${ year } - Precio: ${ precio } - Transmision: ${ transmision } - Puertas: ${ puertas } - Color: ${ color }`;
        //renderizar
        resultados.appendChild( autoHTML );
    });
}
//limpiar html anterior
function limpiarHTML() {
    while ( resultados.firstChild ) {
        resultados.removeChild( resultados.firstChild );
    }
}
//select para mostrar años
function llenarSelect() {
    //for para llenar el select 
    for (let i = maxi; i >= min; i--) {
        //construimos un option para llenar el select
        const option = document.createElement('option');
        //value de option
        option.value = i;
        //text content
        option.textContent = i;
        //renderizar 
        year.appendChild( option );
    }
}
//filtrar autos
function filtrarAutos() {
    //filtrar
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    
    if ( resultado.length ) {
        mostrarAutos( resultado );
    }else {
        //mensaje de no resultados
        noResultados();
    }
}
//no resultados
function noResultados() {
    //limpiar html()
    limpiarHTML() 
    //
    const mensaje = document.createElement('p');
    //clases
    mensaje.classList.add('border', 'error');
    //texcontent
    mensaje.textContent = 'NO HAY RESULTADOS, CAMBIE LOS PARAMETROS DE BUSQUEDA';
    //renderizar
    resultados.appendChild( mensaje );
}
//funcion para ffiltrar por marca
function filtrarMarca( auto ) {
    //destructuring
    const { marca } = datosBusqueda;
    //verificar si MARCA trae un valor
    if ( marca ) {
        //retornamos los valores filtrados
        return auto.marca === marca;
    }
    return auto;
}
//filtrar por año
function filtrarYear( auto ) {
    //destructuring
    const { year } = datosBusqueda;
    //verificar si viene un valor
    if ( year ) {
        //retornar valores filtrados
        return auto.year === year;
    }
    //retornar el array completo en caso de que no se seleccione nada
    return auto;
}
//filtrar por precio minimo
function filtrarMinimo( auto ) {
    //destructuring
    const { minimo } = datosBusqueda;
    //verificar si viene un valor
    if ( minimo ) {
        //comparamos el precio con el precio.minimo
        return auto.precio >= minimo;
    }
    return auto;
}
//filtrar precio maximo
function filtrarMaximo( auto ) {
    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}
//filtrar por numero de puertas
function filtrarPuertas( auto ) {
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}
//filtrar por transmision
function filtrarTransmision( auto ) {
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}
//filtrar por color
function filtrarColor( auto ) {
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}