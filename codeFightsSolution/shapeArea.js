function shapeArea(n) {
    let result = 0;
    if (n > 1) {
        result += (n-1) * 4;
        return shapeArea(n-1) + result;

    } else {
        result = 1
    }
    return result;
}

console.log(shapeArea(4));