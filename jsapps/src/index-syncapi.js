

function start() {
    return 'start '
}
function end() {
    return 'end'
}
function sayHello() {
    return 'hello'
}
//sync style : every function has to be completed before moving to next function 
console.log(start())
console.log(sayHello())
console.log(end())