//suit 
describe('order module test', () => {
    //life cycle apis
    beforeEach(() => {
        console.log('order init')
    })
    afterEach(() => {
        console.log('order destrory')
    })
    //order test cases 
    test('order must have products', () => {
        expect('products').toBe('products')
    })
    //order test cases 
    test('order must have customers', () => {
        expect('customers').toBe('customers')
    })
    //order test cases 
    test('order must have items', () => {
        expect('items').toBe('items')
    })
    //order test cases 
    test('order must have stocks', () => {
        expect('stocks').toBe('stocks')
    })

})