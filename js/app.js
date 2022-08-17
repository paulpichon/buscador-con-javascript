//variables
//renderizacion de los resultados
const resultado = document.querySelector('#resultado');
//año actual
const maxi = new Date().getFullYear();
//año minimo
const min = maxi - 10;
/*DATOS DE BUSQUEDA*/
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

//objeto datos de buscador
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color    : ''
}

//event listener
//cargar event listeners
document.addEventListener('DOMContentLoaded', () => {
    //mostrar autos
    mostrarAutos( autos );
    //llenar select de años
    llenarSelect();
    //datos de busqueda de marca addeventlistener
    marca.addEventListener('change', e => {
        //añadir valor del select a datosbusqueda.marca
        datosBusqueda.marca = e.target.value;
        //llamamos funcion para filtrar
        filtrarAutos();
    });
    //datos de busqueda de year addeventlistener
    year.addEventListener('change', e => {
        //añadir valor del select a datosbusqueda.year
        datosBusqueda.year = parseInt( e.target.value );
        //llamamos funcion para filtrar
        filtrarAutos();
    });
    //datos de busqueda de minimo addeventlistener
    minimo.addEventListener('change', e => {
        //añadir valor del select a datosbusqueda.minimo
        datosBusqueda.minimo = parseInt( e.target.value );
        //llamamos funcion para filtrar
        filtrarAutos();
    });
    //datos de busqueda de maximo addeventlistener
    maximo.addEventListener('change', e => {
        //añadir valor del select a datosbusqueda.maximo
        datosBusqueda.maximo = parseInt( e.target.value );
        //llamamos funcion para filtrar
        filtrarAutos();
    });
    //datos de busqueda de puertas addeventlistener
    puertas.addEventListener('change', e => {
        //añadir valor del select a datosbusqueda.puertas
        datosBusqueda.puertas = parseInt( e.target.value );
        //llamamos funcion para filtrar
        filtrarAutos();
    });
    //datos de busqueda de transmision addeventlistener
    transmision.addEventListener('change', e => {
        //añadir valor del select a datosbusqueda.transmision
        datosBusqueda.transmision = e.target.value;
        //llamamos funcion para filtrar
        filtrarAutos();
    });
    //datos de busqueda de color addeventlistener
    color.addEventListener('change', e => {
        //añadir valor del select a datosbusqueda.color
        datosBusqueda.color = e.target.value;
        //llamamos funcion para filtrar
        filtrarAutos();
    });
});

//funciones
//funcion para mostrar autos
function mostrarAutos( autos ) {
    //limpiar el html anterior
    limpiarHTML();
    //recorrer con un foreach(), para renderizar los autos en el html
    autos.forEach( auto => {
        //destructuring
        const { color, marca, modelo, precio, puertas, transmision, year } = auto;
        //crear un elemento html
        const autoHTML = document.createElement('p');
        //insertar textcontent
        autoHTML.textContent = `${ marca } ${ modelo } ${ year } - Precio: ${ precio } - Transmision: ${ transmision } - Puertas: ${ puertas } - Color: ${ color }`;
        //renderizar en el html
        resultado.appendChild( autoHTML );
    });
}
//limpiar html
function limpiarHTML() {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}
//no resultados
function noResultados() {
    //limpiar html anterior
    limpiarHTML();
    //crear elemento html
    const noResultado = document.createElement('p');
    //mensaje
    noResultado.textContent = 'NO HAY RESULTADO, CAMBIAR PARAMETROS DE BUSQUEDA';
    //clases
    noResultado.classList.add('border', 'error');
    //renderizar
    resultado.appendChild( noResultado );
}
//llenar select de años
function llenarSelect() {
    //con un for() recorremos los años del año actual hasta el año actual menos 10 años
    //maxi = 2022, min = maxi - 10 = 2012
    for (let i = maxi; i >= min ; i--) {
        //crear un option
        const option = document.createElement('option');
        //insertar el value i
        option.value = i;
        //insertar el textcontet i
        option.textContent = i;
        //renderizamos en el html
        year.appendChild( option );
    }
}
//filtrar autos
function filtrarAutos() {
    //crear una variable para recorrer el arreglo autos
    const resultados =  autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    //console.log( resultados );
    if ( resultados.length ) {
        mostrarAutos( resultados );
    }else {
        //mostrar mensaje de nos resultados
        noResultados();
    }
}
//filtrar por marca
//le pasamos como parametro auto
function filtrarMarca( auto ) {
    //destructuring de datosBusqueda
    const { marca } = datosBusqueda;
    //verificar con un if() si viene con valor 
    if ( marca ) {
        //retornar valores de busqueda
        return auto.marca === marca;
    }
    //retornar arreglo completo
    return auto;
}
//filtrar por year
//le pasamos como parametro auto
function filtrarYear( auto ) {
    //destructuring de datosBusqueda
    const { year } = datosBusqueda;
    //verificar con un if() si viene con valor 
    if ( year ) {
        //retornar valores de busqueda
        return auto.year === year;
    }
    //retornar arreglo completo
    return auto;
}
//filtrar por precio filtrarMinimo
//le pasamos como parametro auto
function filtrarMinimo( auto ) {
    //destructuring de datosBusqueda
    const { minimo } = datosBusqueda;
    //verificar con un if() si viene con valor 
    if ( minimo ) {
        //retornar valores de busqueda
        return auto.precio >= minimo;
    }
    //retornar arreglo completo
    return auto;
}
//filtrar por precio filtrarMaximo
//le pasamos como parametro auto
function filtrarMaximo( auto ) {
    //destructuring de datosBusqueda
    const { maximo } = datosBusqueda;
    //verificar con un if() si viene con valor 
    if ( maximo ) {
        //retornar valores de busqueda
        return auto.precio <= maximo;
    }
    //retornar arreglo completo
    return auto;
}
//filtrar por precio filtrarPuertas
//le pasamos como parametro auto
function filtrarPuertas( auto ) {
    //destructuring de datosBusqueda
    const { puertas } = datosBusqueda;
    //verificar con un if() si viene con valor 
    if ( puertas ) {
        //retornar valores de busqueda
        return auto.puertas === puertas;
    }
    //retornar arreglo completo
    return auto;
}
//filtrar por precio filtrarTransmision
//le pasamos como parametro auto
function filtrarTransmision( auto ) {
    //destructuring de datosBusqueda
    const { transmision } = datosBusqueda;
    //verificar con un if() si viene con valor 
    if ( transmision ) {
        //retornar valores de busqueda
        return auto.transmision === transmision;
    }
    //retornar arreglo completo
    return auto;
}
//filtrar por precio filtrarColor
//le pasamos como parametro auto
function filtrarColor( auto ) {
    //destructuring de datosBusqueda
    const { color } = datosBusqueda;
    //verificar con un if() si viene con valor 
    if ( color ) {
        //retornar valores de busqueda
        return auto.color === color;
    }
    //retornar arreglo completo
    return auto;
}