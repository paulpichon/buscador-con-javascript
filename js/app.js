//variables
//resultados
const resultados = document.querySelector('#resultado');
//select marca
const marca = document.querySelector('#marca');
//select año
const year = document.querySelector('#year');
//select precio minimo
const minimo = document.querySelector('#minimo');
//select precio maximo
const maximo = document.querySelector('#maximo');
//select puertas
const puertas = document.querySelector('#puertas');
//select transmision
const transmision = document.querySelector('#transmision');
//select color
const color = document.querySelector('#color');
//año actual
const maxi = new Date().getFullYear();
//año minimo = año actual - 10
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
document.addEventListener('DOMContentLoaded', () => {
    //mostrar autos
    mostrarAutos( autos );
    //select años
    llenarSelectAnios();
    //datos busqueda
    //marca
    marca.addEventListener('change', ( e ) => {
        datosBusqueda.marca = e.target.value;
        //filtarAutos();
        filtarAutos();
    });
    //year
    year.addEventListener('change', ( e ) => {
        datosBusqueda.year = parseInt( e.target.value );
        filtarAutos();
        
    });
    //minimo
    minimo.addEventListener('change', ( e ) => {
        datosBusqueda.minimo = e.target.value;
        
    });
    //maximo
    maximo.addEventListener('change', ( e ) => {
        datosBusqueda.maximo = e.target.value;
        
    });
    //puertas
    puertas.addEventListener('change', ( e ) => {
        datosBusqueda.puertas = e.target.value;
        
    });
    //transmision
    transmision.addEventListener('change', ( e ) => {
        datosBusqueda.transmision = e.target.value;
        
    });
    //color
    color.addEventListener('change', ( e ) => {
        datosBusqueda.color = e.target.value;
        
    });
});


//funciones
//mostrar autos
function mostrarAutos( autos ) {
    //limpiar html
    limpiarHTML();
    //iterar el array de los autos
    autos.forEach( auto => {
        //destructuring
        const { color, marca, modelo, precio, puertas, transmision, year} = auto;
        //crear un elemento html
        const autoHTML = document.createElement('p');
        //insertar informacion textContent
        autoHTML.textContent = `
            ${ marca } ${ modelo } ${ year } - Precio: ${ precio } - Puertas: ${ puertas } - Transmision: ${ transmision } - Color: ${ color }
        `;
        //renderizar en el html
        resultados.appendChild( autoHTML );
    });
}
//llenar el select con los años
function llenarSelectAnios() {
    //for() para crear los años del select
    for (let i = maxi; i >= min; i--) {
        //elemento html
        const option = document.createElement('option');
        //insertar textcontent
        option.textContent = i;
        //insertat valor del value
        option.value = i;
        //renderizar en el html
        year.appendChild( option );
    }
}
//limpiar htm
function limpiarHTML() {
    while ( resultados.firstChild ) {
        resultados.removeChild( resultados.firstChild );
    }
}
//select individual
function filtarAutos() {
    //usamos filter()
    //filtrarMarca = funcion
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear );
    //mostrar resultados
    mostrarAutos( resultado );
}
//funcion para filtrar por marca
function filtrarMarca( auto ) {
    //destructuring
    const { marca } = datosBusqueda;
    //verificar si viene marca en datos busqueda
    if ( marca ) {
        //retornamos 
        return auto.marca === marca;
    }
    //en caso de que no haya seleccionado nada se vuelve a mandar el arreglo
    return auto;
}
//filtrar por año
function filtrarYear( auto ) {
    //destructuring 
    const { year } = datosBusqueda;
    //verificar si viene año en el arreglo datos busqueda
    if ( year ) {
        //retornar
        return auto.year === year;
    }
    return auto;
}