const add = require('../src/adder')

// add(10, 10, (res) => {
//     console.log(res)
// })
test('adder mock test', () => {
    const mockCallback = jest.fn(x => x)
    add(10, 2, mockCallback)
    expect(mockCallback.mock.results[0].value).toBe(12)
})