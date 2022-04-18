// Métodos o funciones de alto nivel (no exhaustivo) para arrays desde ECMAScript 6

let alumnos = [
    {nombre: 'María', apellidos: 'Zuil', puntuacion: 4.6, apto: null},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7, apto: null},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 3.6, apto: null},
    {nombre: 'Carlos', apellidos: 'Pérez', puntuacion: 6.7, apto: null},
]

// Método forEach
// Por cada elemento del array ejecuta una función callback que recibe
// como argumentos, el elemento y el índice de ese elemento (indexado a 0)
/* <array>.forEach((elemento, índice) => {
    // Código a ejecutar con cada elemento o índice
})*/

let numeroAlumnosAptos = 0;

alumnos.forEach((alumno, i) => {
    if (alumno.puntuacion >= 5) {
        numeroAlumnosAptos++;
        alumno.apto = true; // podemos setear valores en el propio objeto iterado
    } else {
        alumno.apto = false;
    }
})

console.log(alumnos);
console.log(numeroAlumnosAptos);

// Método map
// Idem anterior pero retorna el resultado de la ejecución de la callbak en un array

const listadoNombresAlumnos = alumnos.map((alumno, i) => {
    //...
    return `${i + 1}.- ${alumno.nombre} ${alumno.apellidos}`;
})

console.log(listadoNombresAlumnos.join('\n'));

// Método filter
// Idem map pero retorna los elementos que cumplan una condición

const alumnosNoAptos = alumnos.filter(alumno => alumno.puntuacion < 5);
console.log(alumnosNoAptos);