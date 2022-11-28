//return function from another function .
function counter() {
    //inner function 
    return function () {
        return 10
    }
}
const func = counter()
console.log(func())

let inc = () => {
    //inner function 
    return () => {
        return 10
    }
}

const func1 = counter()
console.log(func1())

inc = () => () => 10 
console.log(inc()())