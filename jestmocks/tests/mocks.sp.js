// biz function 
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

//we are going to test implementation of a function, forEach, which invokes a callback for each item supplied in array.
test('mocking example', () => {
    //mock function creation
    const mockFunc = jest.fn(x => 2 + x)

    console.log('Mock Object',mockFunc)
    //calling biz method by passing mockFunc
    forEach([10, 100, 2], mockFunc)

    //verify whether function is called two times here because we have two values
    expect(mockFunc.mock.calls.length).toBe(3)

    //Test arg match
    console.log(mockFunc.mock.calls[1][0])
    //first arg of first call to the function was 10
    expect(mockFunc.mock.calls[0][0]).toBe(10)
    //second arg of second call to the function was 100
    expect(mockFunc.mock.calls[1][0]).toBe(100)
    //thrid arg of thrid call to the function was 2
    expect(mockFunc.mock.calls[2][0]).toBe(2)

    //Return value
    console.log(mockFunc.mock.results)
    expect(mockFunc.mock.results[0].value).toBe(12)
})