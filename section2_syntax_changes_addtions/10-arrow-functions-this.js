// not necessary to put a return
// not necessary curly braces




function fn (){
    console.log(this)
}

fn();

// In that case this represents button Scope
let myButton = document.querySelector('button');


// with Arrow Functions we have the window scope in spite 'this' is inside the function executed in click listener
let fn2 = () => console.log(this);


myButton.addEventListener('click', fn2);



