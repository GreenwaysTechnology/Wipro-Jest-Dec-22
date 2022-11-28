
function sayGreet(greet) {
    greet('Subramanian')
}
let hai = function (name = '') {
    console.log(`Hai ${name}`)
}
sayGreet(hai)
sayGreet(function (name = '') {
    console.log(`Hai ${name}`)
})