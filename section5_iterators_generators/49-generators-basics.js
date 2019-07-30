// this is a generator

function *select() {
    yield 'house';
    yield 'Garage';
}

// get back an iterator
let it = select();
for (let element of it) {
    console.log(element);
}