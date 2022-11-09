//variables
////donde se mostraran los resultados
//renderizar
const resultado = document.querySelector('#resultado');
//input marca
const marca = document.querySelector('#marca');
//input año
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
//año actual
const maxi = new Date().getFullYear();
//año minimo
const min = maxi - 20;

//arreglo para ir acumulando 
let autoObj = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//listeners
document.addEventListener('DOMContentLoaded', () => {
    //mostrar los autos
    mostrarAutos( autos );
    //llenar select de años
    llenarSelect();
    //añadir listener a input marca
    marca.addEventListener('change', e => {
        //console.log( e.target.value );
        autoObj.marca = e.target.value;
        //llamar funcion para filtrar
        filtrarAuto();
    });
    //añadir listener a input year
    year.addEventListener('change', e => {
        //console.log( e.target.value );
        autoObj.year = parseInt(e.target.value);
        //llamar funcion para filtrar
        filtrarAuto();
    });
    //añadir listener a input minimo
    minimo.addEventListener('change', e => {
        //console.log( parseInt(e.target.value ));
        autoObj.minimo = parseInt(e.target.value);
        //llamar funcion para filtrar
        filtrarAuto();
    });
    //añadir listener a input maximo
    maximo.addEventListener('change', e => {
        //console.log( parseInt(e.target.value ));
        autoObj.maximo = parseInt(e.target.value);
        //llamar funcion para filtrar
        filtrarAuto();
    });
    //añadir listener a input puertas
    puertas.addEventListener('change', e => {
        //console.log( parseInt(e.target.value ));
        autoObj.puertas = parseInt( e.target.value );
        //llamar funcion para filtrar
        filtrarAuto();
    });
    //añadir listener a input transmision
    transmision.addEventListener('change', e => {
        //console.log( e.target.value );
        autoObj.transmision = e.target.value;
        //llamar funcion para filtrar
        filtrarAuto();
    });
    //añadir listener a input color
    color.addEventListener('change', e => {
        //console.log( e.target.value );
        autoObj.color = e.target.value;
        //llamar funcion para filtrar
        filtrarAuto();
    });
});

//funciones

//funcion para mostrar los autos desde la BD
function mostrarAutos( autos ) {
    //limpiar el HTML previo
    limpiarHTML();
    //iterar el arreglo de autos
    autos.forEach( auto => {
        //destructuring
        const { color, marca, modelo, precio, puertas, transmision, year } = auto;
        //construir el HTML
        //creamos un elemento HTML
        const parrafoAuto = document.createElement('p');
        //texcontent
        parrafoAuto.textContent = `${marca} ${modelo} ${year} - Precio: ${precio} - Color: ${color} - Transmision: ${transmision} - Puertas: ${puertas}`;
        //renderizar 
        resultado.appendChild( parrafoAuto );
    });
}
//funcion para filtrar los autos
function filtrarAuto() {
    //filtrar sobre el arreglo original
    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    //console.log( resultados );
    //renderizar
    //verificar si hay resultados
    if ( resultados.length > 0 ) {
        mostrarAutos( resultados );
    }else {
        //funcion para mostrar alerta de error
        mostrarAlerta('No hay resultados, cambie los resultados de busqueda.');
    }
}
//funcion para filtrar por marca
function filtrarMarca( auto ) {
    const { marca } = autoObj;
    if ( marca ) {
        return auto.marca === marca;
    }
    //retornamos el arreglo completo en caso de no seleccionar nada
    return auto;
}
//funcion para filtrar por year
function filtrarYear( auto ) {
    const { year } = autoObj;
    if ( year ) {
        return auto.year === year;
    }
    //retornamos el arreglo completo en caso de no seleccionar nada
    return auto;
}
//funcion para filtrar por precio minimo
function filtrarMinimo( auto ) {
    const { minimo } = autoObj;
    if ( minimo ) {
        return auto.precio >= minimo;
    }
    //retornamos el arreglo completo en caso de no seleccionar nada
    return auto;
}
//funcion para filtrar por precio maximo
function filtrarMaximo( auto ) {
    const { maximo } = autoObj;
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    //retornamos el arreglo completo en caso de no seleccionar nada
    return auto;
}
//funcion para filtrar por precio puertas
function filtrarPuertas( auto ) {
    const { puertas } = autoObj;
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    //retornamos el arreglo completo en caso de no seleccionar nada
    return auto;
}
//funcion para filtrar por precio trasmision
function filtrarTransmision( auto ) {
    const { transmision } = autoObj;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    //retornamos el arreglo completo en caso de no seleccionar nada
    return auto;
}
//funcion para filtrar por precio color
function filtrarColor( auto ) {
    const { color } = autoObj;
    if ( color ) {
        return auto.color === color;
    }
    //retornamos el arreglo completo en caso de no seleccionar nada
    return auto;
}

//fucnion para llenar select de años
function llenarSelect() {
    //con un for() crearemos los años
    for( let i = maxi; i >= min; i-- ) {
        //construir el html
        const option = document.createElement('option');
        //textcontent
        option.textContent = i;
        //value
        option.value = i;
        //renderizar
        year.appendChild( option );
    }
}
//funcion para mostrar alerta de error
function mostrarAlerta( mensaje ) {
    //limpiar HTMLprevio
    limpiarHTML();
     //construir el html
    const alerta = document.createElement('p');
    //estilos
    alerta.classList.add('error');
    //textcontent
    alerta.textContent = mensaje;
    //renderizar
    resultado.appendChild( alerta );

      

}
//limpiar el HTML PREVIO
function limpiarHTML() {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}