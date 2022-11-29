
function block(message) {
    console.log(message)
}
function login(userName, passwrod) {
    if (userName === 'admin' && passwrod == 'admin') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, 'Login success')
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 5000, 'Login failed')
        })
    }
}
block('start')
login('admin', 'admin').then(res => console.log(res)).catch(err => console.log(err))
block('end')
