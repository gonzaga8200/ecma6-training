class Person {

}


let person = new Person();

Person.prototype[Symbol.toStringTag] = 'Person';

console.log(person)