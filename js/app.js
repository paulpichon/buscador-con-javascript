//variables
//donde se mostraran los resultados
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
    mostrarAutos();
    //llenar select de años
    llenarSelect();
});

//funciones

//funcion para mostrar los autos desde la BD
function mostrarAutos() {
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