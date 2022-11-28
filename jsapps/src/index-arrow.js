//arrow functions 

//es 5 function 
let sayHello = function () {
    console.log('Hello')
}
//es 6 arrow function 
let sayHai = () => {
    console.log('hai')
}
sayHai()
//code refactoring : 
//if function has only one line of code - remove {}

let sayGreet = () => console.log('greet')

//args and arrow 
let add = (a = 0, b = 0) => {
    let c = a + b
    return c
}
console.log(`The add function ${add(10, 10)}`)
//if fun has only return statement, we can remove {} and return statement
add = (a = 0, b = 0) => a + b

console.log(`The add function ${add(10, 10)}`)

//if fun takes single arg,without default value , return the same,
//we can remove () and {}
let stockValue = value => value
console.log(stockValue(10))