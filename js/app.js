//variables
//variable que hace referencia a donde
const resultado = document.querySelector('#resultado');
//input year
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
//año actual
const maxi = new Date().getFullYear();
//año menos 10
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
};

//eventlistener
eventListener();

function eventListener() {
    //funcion para cargar los autos
    mostrarAutos( autos );
    //funcion para llenar el select de años
    llenarSelectYears();
    //agregar listeners a los inputs
    marca.addEventListener('change', ( e ) => {
         //añadimos el valor del input a datosBusqueda.marca
        datosBusqueda.marca = e.target.value;
        //funcion para filtrar por auto 
        filtrarAuto();
    });
    year.addEventListener('change', ( e ) => {
         //añadimos el valor del input a datosBusqueda.year
        datosBusqueda.year = parseInt( e.target.value );
        //funcion para filtrar por auto 
        filtrarAuto();
    });
    minimo.addEventListener('change', ( e ) => {
         //añadimos el valor del input a datosBusqueda.minimo
        datosBusqueda.minimo = parseInt( e.target.value );
        //funcion para filtrar por auto 
        filtrarAuto();
    });
    maximo.addEventListener('change', ( e ) => {
         //añadimos el valor del input a datosBusqueda.maximo
        datosBusqueda.maximo = parseInt( e.target.value );
        //funcion para filtrar por auto 
        filtrarAuto();
    });
    puertas.addEventListener('change', ( e ) => {
         //añadimos el valor del input a datosBusqueda.puertas
        datosBusqueda.puertas = parseInt( e.target.value );
        //funcion para filtrar por auto 
        filtrarAuto();
    });
    transmision.addEventListener('change', ( e ) => {
         //añadimos el valor del input a datosBusqueda.transmision
        datosBusqueda.transmision = e.target.value;
        //funcion para filtrar por auto 
        filtrarAuto();
    });
    color.addEventListener('change', ( e ) => {
         //añadimos el valor del input a datosBusqueda.color
        datosBusqueda.color = e.target.value;
        //funcion para filtrar por auto 
        filtrarAuto();
    });
}

//funciones
//funcion para mostrar los autos
function mostrarAutos( autos ) {
    //limpiar html anterior
    limpiarHTML();
    //recorrer con un foreach()
    autos.forEach( auto => {
        //destructuring
        const { color, marca, modelo, precio, puertas, transmision, year } = auto;
        //constuir html
        const autoHTML = document.createElement('p');
        //textcontent
        autoHTML.textContent = ` ${marca} ${modelo} ${ year} ${precio} - Puertas: ${puertas} - Transmision: ${transmision} - Color: ${color} `;
        //renderizar
        resultado.appendChild( autoHTML );
    });
}
//funcion para filtrar autos
function filtrarAuto() {
    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    if ( resultados.length > 0) {
        //funcion para renderizar
        mostrarAutos( resultados );
    }else {
        mostrarError('NO HAY RESULTADOS, CAMBIAR PARAMETROS DE BUSQUEDA');
    }
}
//funcion para filtrar por marca
function filtrarMarca( auto ) {
    //destructuring datos busqueda
    const { marca } = datosBusqueda;
    //verificar si viene marca en datos busqueda
    if ( marca ) {
        return auto.marca === marca;
    }else {
        return auto;
    }
}
//funcion para filtrar por año
function filtrarYear( auto ) {
    //destructuring datos busqueda
    const { year } = datosBusqueda;
    //verificar si viene year en datos busqueda
    if ( year ) {
        return auto.year === year;
    }else {
        return auto;
    }
}
//funcion para filtrar por precio minimo
function filtrarMinimo( auto ) {
    //destructuring datos busqueda
    const { minimo } = datosBusqueda;
    //verificar si viene year en datos busqueda
    if ( minimo ) {
        return auto.precio >= minimo;
    }else {
        return auto;
    }
}
//funcion para filtrar por precio maximo
function filtrarMaximo( auto ) {
    //destructuring datos busqueda
    const { maximo } = datosBusqueda;
    //verificar si viene maximo en datos busqueda
    if ( maximo ) {
        return auto.precio <= maximo;
    }else {
        return auto;
    }
}
//funcion para filtrar por puertas
function filtrarPuertas( auto ) {
    //destructuring datos busqueda
    const { puertas } = datosBusqueda;
    //verificar si viene maximo en datos busqueda
    if ( puertas ) {
        return auto.puertas === puertas;
    }else {
        return auto;
    }
}
//funcion para filtrar por transmision
function filtrarTransmision( auto ) {
    //destructuring datos busqueda
    const { transmision } = datosBusqueda;
    //verificar si viene maximo en datos busqueda
    if ( transmision ) {
        return auto.transmision === transmision;
    }else {
        return auto;
    }
}
//funcion para filtrar por color
function filtrarColor( auto ) {
    //destructuring datos busqueda
    const { color } = datosBusqueda;
    //verificar si viene maximo en datos busqueda
    if ( color ) {
        return auto.color === color;
    }else {
        return auto;
    }
}
//funcion para llenar el selece de años
function llenarSelectYears() {
    //con un for() creamos los años
    for (let i = maxi; i >= min; i--) {
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
//limpiar html
function limpiarHTML() {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}
//funcion para mostrar mensajes de error
function mostrarError( error ) {
    //limpiar html
    limpiarHTML();
    const mensajeError = document.createElement('p');
    //clase
    mensajeError.classList.add('error');
    //texcontent
    mensajeError.textContent = error;
    //renderizar
    resultado.appendChild( mensajeError );
}