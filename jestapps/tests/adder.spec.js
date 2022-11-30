const add = require('../src/adder')
//postive case 
test('two plus two is four', () => {
    // let output = 2 + 2
    let output = add(2, 2)
    expect(output).toBe(4)
})

test('1 plus three is four', () => {
    let output = add(1, 3)
    expect(output).toBe(4)
})
//negative case 
test('two plus two not four', () => {
    let output = add(2,2)
    expect(output).not.toBe(3)
})