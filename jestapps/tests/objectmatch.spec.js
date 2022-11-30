
test('Object property matching', () => {
    let profile = { id: 1, name: 'subramaian', city: 'coimbatore' }
    expect(profile).toEqual({ id: 1, name: 'subramaian', city: 'coimbatore' })
})

test('Object property matching with undefined', () => {
    // let profile = { id: 1, name: 'subramaian', city: undefined}
    let profile = { id: 1, name: 'subramaian', city: 'coimbatore'}

    //expect(profile).toEqual({ id: 1, name: 'subramaian' })
    expect(profile).toStrictEqual({ id: 1, name: 'subramaian',city:'coimbatore' })
})