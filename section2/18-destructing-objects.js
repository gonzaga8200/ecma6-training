let animal = {
    nom: 'Cochon',
    adjectif: 'sale',
    greet: () => 'oinc oinc'
}
// we need to match the name of the variable with the property.
// However we can use alias
let {nom : myname , adjectif, greet} = animal;

//console.log(nom);
console.log(adjectif);
console.log(greet());
console.log(myname)

