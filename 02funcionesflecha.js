// Funciones flecha en JS (ECMAScript 6)
// Nueva sintaxis para funciones de expresión y anónimas


// const cubo = (a) => {
//     return a * a * a;
// }


// Si solo tiene un parámetro se pueden aliviar los paréntesis
// Si solo tiene una línea en el cuerpo de la función se pueden aliviar las llaves
// Si solo tiene una línea en el cuerpo de la función el return será implícito

const cubo = a => a * a * a;


console.log(cubo(5));

const printMensaje = _ => console.log('Hola'); // Sintaxis poco usada que sustituye paréntesis por underscore
                                               // cuando no tiene parámetros


// La otra ventaja de las flechas es que no tienen la referencia this

class Mensaje {
    nombre = '';
    constructor(nombre) {
        this.nombre = nombre;
    }

    getMensaje() {
        // setTimeout(function() { 
        //     console.log('Hola ' + this.nombre); // nos devuelve undefined porque la función tiene su propio this
        // }, 1000)
        setTimeout(() => { 
            console.log('Hola ' + this.nombre);
        }, 1000)
    }
}

let mensaje1 = new Mensaje('Lucía');
mensaje1.getMensaje();
