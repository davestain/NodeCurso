// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// let saludar = () => 'Hola Mundo';

// function saludar (nombre){
//     return `Hola ${ nombre }`;
// }

let saludar = nombre => `Hola ${ nombre }`;
console.log(saludar('David'));

// console.log(sumar(10, 20));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre() { //se puede omitir el ": function"
        return `${ this.nombre } ${this.apellido } - poder: ${ this.poder }`
    }
}

console.log(deadpool.getNombre());