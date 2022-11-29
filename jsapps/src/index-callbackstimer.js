function start() {
    return 'start '
}
function end() {
    return 'end'
}
const sayHello = callback => {
    setTimeout(callback, 5000, 'Delay')
}
//sync style : every function has to be completed before moving to next function 
console.log(start())
sayHello(message => console.log(message))
console.log(end())