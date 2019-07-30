class ConvertableArray extends Array {
    convert() {
        let returnedArray = [];
        this.forEach(value => returnedArray.push('Converted '+ value ))
        return returnedArray
    }
}


let convertedArray = new ConvertableArray();
convertedArray.push(1);
convertedArray.push(2);
convertedArray.push(3);
convertedArray.push(4);


console.log(convertedArray.convert());