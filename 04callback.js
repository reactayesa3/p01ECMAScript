// Sintaxis de una callback
// En JS podemos pasar funciones como argumentos a otra función

const setMensaje = (nombre, callbackMensaje) => {
    // código 
    callbackMensaje(nombre);
}


// En la invocación se puedan implementar diferentes soluciones
// según como se declare la callback

setMensaje('Laura', nombre => {
    console.log('Hola ' + nombre);
})

setMensaje('Laura', name => {
    console.log('Hello ' + name);
})


// Manejo de asincronía en JS

const cuentaAtras = (segundos, callbackMostrarSegundos) => {
    let timer = setInterval(() => { // Usamos setInterval para simular asincronía
        let error;
        if(typeof segundos !== 'number') {
            clearInterval(timer);
            error = 'El primer argumento debe ser numérico';
        }
        callbackMostrarSegundos(error, segundos);
        segundos--;
        if (segundos === 0) {
            clearInterval(timer);
        }
    }, 1000)
}

cuentaAtras(5, (err, seg) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Quedan ' + seg + ' segundos')
    }
});