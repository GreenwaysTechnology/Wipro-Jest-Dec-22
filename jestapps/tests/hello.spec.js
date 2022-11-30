const sayHello = require('../src/hello')
// //test case 
// test('it should be hello', () => {
//     let output = 'Hai'
//     //output must match requirement- toEqual('Hello')
//     expect(output).toEqual('Hello')
// })

test('it should hello', () => {
    let output = sayHello()
    expect(output).toEqual('hello')
})