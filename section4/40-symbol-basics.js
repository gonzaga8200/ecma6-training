// the symbol represent an unique ID
// it's not and printout
let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');


let obj = {
    nom: 'parapluie',
    couleur: 'noir',
    [symbol]: 45
}

console.log(typeof symbol);
console.log(symbol == anotherSymbol);

console.log(obj[symbol])
