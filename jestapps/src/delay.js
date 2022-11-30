
function delay() {
    // return Promise.resolve('hello')
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, 'hello')
    })
}
module.exports = delay