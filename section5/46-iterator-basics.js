let array = [1, 2, 3];


let it = array[Symbol.iterator]();

let length = array[Symbol.length];


let miPalabra = "holaqase";
let itString = miPalabra[Symbol.iterator]();

console.log(typeof array[Symbol.iterator]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(itString.next());
console.log(length);