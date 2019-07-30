// Promise accept two parameters which are also functions
//
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Done!')
    },1501);
})


let promise2 = new Promise(function (resolve, reject) {
    const pirikichi = 'toma amatoma';
    resolve(pirikichi);
})


let promise3 = new Promise(function (resolve, reject) {
    const myArray = ['abeille', 'chien', 'chat', 'araignée'];
    setTimeout(function () {
        resolve(myArray);
    },1500);
})

// The function then is used when we resolve the promise.
promise.then(()=>{
    console.log('Check')
});


promise2.then((value)=>{
    console.log('mi frase es ' +  value);
});


promise3.then((value => {
    for (let element of value) {
        console.log(element);
    }
}))