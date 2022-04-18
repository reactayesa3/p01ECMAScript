// Promesas JS
// Tipo de dato
// Se caracteriza porque proviene de una clase Promise y cuando se instancia permite
// el uso de dos métodos denominados resolve y reject, nos permiten definir lo que devolverá
// la promesa  en caso de éxito y en caso de error.
// Además en el consumo de la promesa disponemos de una sintaxis de métodos then() y catch() para 
// recibir el éxito y el error.

// Es un mecanismo especialmente diseñado para el manejo de asincronía en JS

// Vamos a declarar una función que devuelva una promesa

const users = ['Juan Pérez', 'Laura Gómez', 'Pilar López'];

const getUser = position => {
    return new Promise((resolve, reject) => {
        if(position < 0 || position >= users.length) {
            reject({error: 'Posición no válida'})
        }
        setTimeout(() => { // Simulando la asincronía habitual de la lógica empleada en las promesas
            resolve({user: users[position]})
        }, 3000)
    })
}

// console.log(getUser(1)); Si no se emplea la sintaxis de consumo la promesa aparece como pendiente


getUser(1)
    .then(data => { // Una callback con la data devuelta por resolve como argumento
        // Lógica con la data devuelta por la promesa
        console.log(data);
        // Lógica 
        return data.user;
    })
    .then(data => { // Los then se pueden encadenar para generar un pipe de transformación de datos
        // Lógica
        console.log(data);
    })
    .catch(err => console.error(err))
