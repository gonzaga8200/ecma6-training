let obj = {
    [Symbol.iterator] : gen
}


function *gen() {
    yield 1;
    yield 2;
}


for (let element of obj){
    console.log(element);
}



function *gen2(end) {
    for (let i=0; i < end; i++) {
        yield i
    }
}


let it = gen2(5);

for (let element of it) {
    console.log(element);
}