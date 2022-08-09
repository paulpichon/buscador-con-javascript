//variables
//resultados
const resultados = document.querySelector('#resultado');
//select año
const year = document.querySelector('#year');
//año actual
const maxi = new Date().getFullYear();
//año minimo = año actual - 10
const min = maxi - 10;


//eventlistener
document.addEventListener('DOMContentLoaded', () => {
    //mostrar autos
    mostrarAutos();
    //select años
    llenarSelectAnios();
});


//funciones
//mostrar autos
function mostrarAutos() {
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