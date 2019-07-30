function waitAsecond(seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            seconds++;
            resolve(seconds);
        }, 1)
    })
}



waitAsecond(24)
    .then(waitAsecond)
    .then(function (seconds) {
        console.log(seconds);
    })
