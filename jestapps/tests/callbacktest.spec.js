
function fetchData(callback) {
    setTimeout(callback, 1000, 'Hello')
}

test('callback tests', () => {
    fetchData(function (res) {
        expect(res).toBe('Hello')
    })
})