
function block(message) {
    console.log(message)
}
function login(userName, passwrod) {
    if (userName === 'admin' && passwrod == 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}
block('start')
login('admin', 'admin').then(res => console.log(res)).catch(err => console.log(err))
block('end')
