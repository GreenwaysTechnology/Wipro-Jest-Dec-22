//mock the whole jquery lib itself

jest.mock('jquery')

beforeEach(() => {
    jest.resetModules()
})

test('calls into $.ajax api with correct params', () => {
    const $ = require('jquery')
    const fetchCurrentUser = require('../fetchCurrentUser')
    //dummy callback
    const dummyCallback = () => { }
    fetchCurrentUser(dummyCallback)
    //make sure the that $.ajax api was called properly 
    expect($.ajax).toHaveBeenCalledWith({
        success: expect.any(Function),
        type: 'GET',
        url: 'http://example.com/currentUser'
    })
})
//
test('calls the callback when $.ajax requests are finished', () => {
    const $ = require('jquery');
    const fetchCurrentUser = require('../fetchCurrentUser');
  
    // Create a mock function for our callback
    const callback = jest.fn();
    fetchCurrentUser(callback);
  
    // Now we emulate the process by which `$.ajax` would execute its own
    // callback
    $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
      firstName: 'Bobby',
      lastName: 'Marley',
    });
  
    // And finally we assert that this emulated call by `$.ajax` incurred a
    // call back into the mock function we provided as a callback
    expect(callback.mock.calls[0 /*first call*/][0 /*first arg*/]).toEqual({
      fullName: 'Bobby Marley',
      loggedIn: true,
    });
  });