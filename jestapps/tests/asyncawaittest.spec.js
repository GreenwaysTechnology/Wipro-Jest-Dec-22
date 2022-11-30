const delay = require('../src/delay')
const rejectMe = require('../src/errorpromise')


test('async await test', async () => {
    const data = await delay()
    expect(data).toBe('hello')
})

test('async await test with error', async () => {
    await expect(rejectMe()).rejects.toMatch('error')
})