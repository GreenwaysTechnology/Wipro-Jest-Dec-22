beforeAll(() => {
    console.log('init -one time')
})
afterAll(() => {
    console.log('destroy -one time')
})
beforeEach(() => {
    console.log('init')
})
afterEach(() => {
    console.log('destrory')
})
test('one', () => {
    expect('hello').toBe('hello')
})
test('two', () => {
    expect('hello').toBe('hello')
})
test('three', () => {
    expect('hello').toBe('hello')
})