
test('arrays', () => {
    const list = ['subramanian', 'ram', 'john', 'karthik']
    expect(list).toContain('subramanian')
    expect(list).not.toContain('joe')
})