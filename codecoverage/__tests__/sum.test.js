const sum = require('../src/sum')
test('sum test -add ', () => {
    expect(sum.add(1, 2)).toBe(3)
})
// test('sum test -add ', () => {
//     expect(sum.substract(10, 2)).toBe(8)
// })