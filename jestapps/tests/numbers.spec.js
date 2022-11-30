
//comparsional test 
test('comparsional test for whole numbers', () => {
    let value = 100
    //100 should be greaterthan 10
    expect(value).toBeGreaterThan(10)
    expect(value).toBeGreaterThanOrEqual(100)
    expect(value).toBeLessThan(200)
    //equal test   =  toBe or equal 
    expect(value).toBe(100)
    expect(value).toEqual(100)

})

test('comparsional test for float points', () => {
    let value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3)
})