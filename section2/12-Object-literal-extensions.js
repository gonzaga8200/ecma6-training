let name = 'Gon';
let age = 25;
// we can add dynamic parameters in an object
let dynamicField = "dynamic"

let myObject = {
    name,
    age,
    [dynamicField] : 'myValue',
    greet() {
        console.log(this.name + ' ' + this.age)
    },

}

console.log(myObject);
myObject.greet();