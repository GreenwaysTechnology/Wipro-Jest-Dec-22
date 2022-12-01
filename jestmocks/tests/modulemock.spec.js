const axios = require('axios')
const Users = require('../src/users');

jest.mock('axios');

test('should fetch users', () => {
    //fake data to be tested against api 
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    //Mock axios http get method and get response
    axios.get.mockResolvedValue(resp);
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users));
});