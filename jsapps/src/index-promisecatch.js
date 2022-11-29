//how write promise : factory api and constructor api 
//Promises are by default async 

function block(message) {
    console.log(message)
}
function delay() {
    return Promise.reject(new Error('something went wrong'))

}
block('start')
delay().catch(err => console.log(err))
block('end')
