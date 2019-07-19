let norriture = ['beurre', 'biére', 'confiture', 'huil', 'pain', 'vin', 'eau', 'oeuf', 'viande', 'boef', 'gateaux', 'bonbon'];

// a great way to extract values from an array. a, b, c are copies
// If we have an exceed values the out
let [a, b, c ] = norriture;

console.log(a);
console.log(b);
console.log(c);


let adjectif = ['joli', 'gran', 'sale', 'propre', 'seul', 'gros', 'chaud', 'froid', 'mauvais','nouveau'];

let [x, ...y] = adjectif;

console.log(x);

console.log(y);

// It's possible to skip values in the array
let [z, ,h] = adjectif

console.log(z);
console.log(h);
