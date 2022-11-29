

function start() {
    return 'start '
}
function end() {
    return 'end'
}
function sayHello(callback) {
    //async api : timers
    setTimeout(callback, 5000, 'Delay')
}
//sync style : every function has to be completed before moving to next function 
console.log(start())
sayHello(function (message) {
    console.log(message)
})
console.log(end())