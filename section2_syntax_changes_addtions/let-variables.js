let scope = 'external scope';
if (true) {
    let scope = 'block scope';
    console.log(scope);
}
console.log(scope);