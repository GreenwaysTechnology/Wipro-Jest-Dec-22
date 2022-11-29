//how write promise : factory api and constructor api 
//Promises are by default async 

function block(message) {
    console.log(message)
}
function delay() {
    return Promise.resolve('ok!')

}
block('start')
delay().then(res => console.log(res))
block('end')
