
test('string tests', () => {
    let value = 'hello'
    expect(value).toEqual('hello')
})

test('string tests to match', () => {
    let value = 'hello'
    expect(value).toMatch(/he/)
})