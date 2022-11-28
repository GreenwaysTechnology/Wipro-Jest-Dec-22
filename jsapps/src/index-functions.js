//function declaration

//regular function 
function sayHello() {
    return 'Hello'
}
//function invcation 
console.log(sayHello())

//assign the function inside variable 
let hello = sayHello;
//we can invoke function using hello variable 
console.log(hello())
//anonmous functions :function without name 
let hai = function () {
    console.log('Hai')
}
hai()
//args and parameters in the anonmous function 
let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10,10))
console.log(add())

