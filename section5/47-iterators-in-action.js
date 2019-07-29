let array = [1, 2, 3];




let length = array[Symbol.length];


let miPalabra = "holaqase";
let itString = miPalabra[Symbol.iterator]();

array[Symbol.iterator] = function() {
    let nextValue = 10;
    return  {
        next: function () {
            nextValue++;
            return {
                done: nextValue > 15 ? true : false,
                value: nextValue
            }
        }
    }
}

let it = array[Symbol.iterator]();

console.log(Symbol.iterator);

console.log(typeof array[Symbol.iterator]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(itString.next());
console.log(length);


for (let element of array) {
    console.log(element);
}