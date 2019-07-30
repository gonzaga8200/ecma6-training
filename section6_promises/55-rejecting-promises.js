let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Denegado')
    },1500)
})


// It's possible to pass a second argument which manages the promise when it's rejected

promise.then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error)
});
