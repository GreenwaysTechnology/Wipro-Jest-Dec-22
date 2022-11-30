
function sayHello(message) {
    if (message !== 'hello') {
       throw new Error('hello message was missing')
    }
}


test('exception should be thrown', () => {
    expect(()=>sayHello()).toThrow('hello message was missing')
})