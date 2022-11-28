//

const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('Login success')
    } else {
        reject('Login failed')
    }
}
login('admin', 'admin', status => console.log(status), err => console.log(err))

login('foo', 'bar', status => console.log(status), err => console.log(err))

const test = (title, callback) => {
    callback(title)
}

function expect(res) {
    console.log(res)
}

test('adds 1 + 2 to equal to 3', () => {
    expect('test passd')
})