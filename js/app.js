//variables
const resultado = document.querySelector('#resultado');
//variables de los inputs
//const option donde iran los años
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
//año actual para llenar el select
const maxi = new Date().getFullYear();//2022
//año actual menos 10
const min = maxi - 10;//2012
//creamos un objeto con los datos de busqueda
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
    //funcion para cargar los autos
    mostrarAutos( autos );
    //llenarselect años
    llenarSelect();
    //FILTROS
    marca.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.marca = e.target.value;
        //lo mandamos a la funcion filtrarAutos()
        filtrarAutos();
    });
    year.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.year = parseInt( e.target.value );
        //lo mandamos a la funcion filtrarAutos()
        filtrarAutos();
    });
    minimo.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.minimo = parseInt( e.target.value );
        //lo mandamos a la funcion filtrarAutos()
        filtrarAutos();
    });
    maximo.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.maximo = parseInt(e.target.value);
        //lo mandamos a la funcion filtrarAutos()
        filtrarAutos();
    });
    puertas.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.puertas = parseInt( e.target.value );
        //lo mandamos a la funcion filtrarAutos()
        filtrarAutos();
    });
    transmision.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.transmision = e.target.value;
        //lo mandamos a la funcion filtrarAutos()
        filtrarAutos();
    });
    color.addEventListener('change', ( e ) => {
        //console.log( e.target.value );
        datosBusqueda.color = e.target.value;
        //lo mandamos a la funcion filtrarAutos()
        filtrarAutos();
    });
});

//funciones
//funcion para mostrar autos
function mostrarAutos( autos ){
    //limpiar html anterior
    limpiarHTML();
    //construir el html
    //recorremos el arreglo de los autos con foreach
    autos.forEach( auto => {
        //destructuring
        const { color, marca, modelo, precio, puertas, transmision, year } = auto;
        //elemento html
        const autoHTML = document.createElement('p');
        //añadir el textcontent
        autoHTML.textContent = `${marca} ${modelo} $ ${precio} - Año: ${year} - Color: ${color} - Transmision: ${transmision} - Puertas: ${puertas}`;
        //renderizamos
        resultado.appendChild( autoHTML );
    });
}
//limpiar html anterior
function limpiarHTML() {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}
//funcion para llenar el select de años del año actual - 10
function llenarSelect() {
    for (let i = maxi; i >= min; i--) {
        //creamos el html
        const option = document.createElement('option');
        //insertar texto
        option.textContent = i;
        //añadir el value del option
        option.value = i;
        //renderizamos
        year.appendChild( option );
    }
}
//funcion para filtrar autos
function filtrarAutos() {
    //filtrar autos
    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarPrecioMinimo ).filter( filtrarPrecioMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    //console.log( resultados );
    if ( resultados.length > 0 ) {
        //funcion para renderizar
        mostrarAutos( resultados );
    }else{
        //mensaje error
        noResultados('NO HAY RESULTADOS, CAMBIAR LOS PARAMETROS DE BUSQUEDA');
    }
}
//FUNCION PARA MOSTRAR MENSAJE DE ERROR
function noResultados( error ) {
    //limpiar el html anterior
    limpiarHTML();
    //construir el html
    const mensajeError = document.createElement('p');
    //añadir clase
    mensajeError.classList.add('error');
    //añadir texto
    mensajeError.textContent = error;
    //renderizar
    resultado.appendChild( mensajeError );
}
//funcion para filtrar por marca
function filtrarMarca( auto ) {
    //destructuring
    const { marca } = datosBusqueda;
    //verificar que venga con valor MARCA
    if ( marca ) {
        return auto.marca === marca;
    }
    //en caso de que no se seleccione nada retornamos el arreglo completo
    return auto;
}
//funcion para filtrar por año
function filtrarYear( auto ) {
    //destructuring
    const { year } = datosBusqueda;
    //verificar que venga con valor MARCA
    if ( year ) {
        return auto.year === year;
    }
    //en caso de que no se seleccione nada retornamos el arreglo completo
    return auto;
}
//funcion para filtrar por precio minimo
function filtrarPrecioMinimo( auto ) {
    //destructuring
    const { minimo } = datosBusqueda;
    //verificar que venga con valor MARCA
    if ( minimo ) {
        return auto.precio >= minimo;
    }
    //en caso de que no se seleccione nada retornamos el arreglo completo
    return auto;
}
//funcion para filtrar por precio maximo
function filtrarPrecioMaximo( auto ) {
    //destructuring
    const { maximo } = datosBusqueda;
    //verificar que venga con valor MARCA
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    //en caso de que no se seleccione nada retornamos el arreglo completo
    return auto;
//funcion para filtrar por precio maximo
}
function filtrarPuertas( auto ) {
    //destructuring
    const { puertas } = datosBusqueda;
    //verificar que venga con valor puertas
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    //en caso de que no se seleccione nada retornamos el arreglo completo
    return auto;
}
function filtrarTransmision( auto ) {
    //destructuring
    const { transmision } = datosBusqueda;
    //verificar que venga con valor transmision
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    //en caso de que no se seleccione nada retornamos el arreglo completo
    return auto;
}
function filtrarColor( auto ) {
    //destructuring
    const { color } = datosBusqueda;
    //verificar que venga con valor color
    if ( color ) {
        return auto.color === color;
    }
    //en caso de que no se seleccione nada retornamos el arreglo completo
    return auto;
}