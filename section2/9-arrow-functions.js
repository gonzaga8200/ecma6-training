// not necessary to put a return
// not necessary curly braces

let fn = () => 8;

console.log(fn());


let sum = (a, b) => a + b;
console.log(sum(5,10));


// not necessary parenthesys. Another parameter ignored
let sumOneParam = a => 8 + a;
console.log(sumOneParam(200, 19));


setTimeout(()=> console.log('hello'), 1000);