// javascript take parameters in order

function isEqualTo (number, compare=number ){
    console.log(number);
    console.log(compare);
    return number == compare;

}

console.log(isEqualTo(10));