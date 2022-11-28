//higher order function  - function as param

function add(a, b) {
    return a + b
}
let x = 10
let y = 90
console.log(add(x, y))
console.log(add(12, 12))

function sayGreet(greet) {
    greet()
}
let hai = function () {
    console.log('hai')
}
sayGreet(hai)

sayGreet(function () {
    console.log('Hai inline')
})
