
let sayGreet = greet => greet('Subramanian')

sayGreet(function (name = '') {
    console.log(`Hai ${name} `)
})
sayGreet((name = '') => console.log(`Hai ${name}`))