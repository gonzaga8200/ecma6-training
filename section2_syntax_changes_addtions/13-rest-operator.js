// the rest operator allows me to include a number of parameters in dynamically way

let sum = (...addP)=> {
    console.log(addP);
    let result = 0;
    for (let myValue of addP) {
        result += myValue;
    }
    return result;
}

console.log(sum(100,15,20));