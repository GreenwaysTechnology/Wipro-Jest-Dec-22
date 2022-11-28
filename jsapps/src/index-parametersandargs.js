//function args and parameters

function sayHello(name) {
    console.log(`Hello ${name}`)
}
sayHello('Subramanian')
sayHello()

//default args 
function multiply(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a * b
    console.log(`The Result is ${c}`)
}
multiply(10, 10)
multiply()