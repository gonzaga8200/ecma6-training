function waitAsecond(seconds) {
    return new Promise(function (resolve, reject) {
        if (seconds > 2 ) {
            reject('rejected')
        } else {
            setTimeout(function () {
                seconds ++;
                resolve(seconds)
            }, 1000)
        }
    })
}


waitAsecond(1)
    .then(waitAsecond)
    .then(function (seconds) {
        console.log(seconds)
    })
    .catch(function (error) {
        console.log(error);
    })