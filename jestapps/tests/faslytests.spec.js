
//Null testing 

test('Null tester', () => {
  let user = null
  expect(user).toBeNull()
  expect(user).toBeDefined()
  expect(user).not.toBeUndefined()
  expect(user).not.toBeTruthy()
  expect(user).toBeFalsy()
})