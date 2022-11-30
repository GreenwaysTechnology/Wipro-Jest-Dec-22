const delay = require('../src/delay')


test('Promise test', () => {
    return delay().then(res => {
        expect(res).toBe('hello')
    })
})