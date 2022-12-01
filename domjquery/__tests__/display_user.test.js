'use strict';
const $ = require('jquery');
const fetchCurrentUser = require('../fetchCurrentUser');

jest.mock('../fetchCurrentUser.js');

test('displays a user after a click', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

  // This module has a side-effect
   require('../displayUser');
 
  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  //here we make fake api call , inject some fake data to simulate the api response
  fetchCurrentUser.mockImplementation(cb => {
    cb({
      fullName: 'Johnny Cash',
      loggedIn: true,
    });
  });

  // Use jquery to emulate a click on our button
  $('#button').click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(fetchCurrentUser).toHaveBeenCalled();
  expect($('#username').text()).toBe('Johnny Cash - Logged In');
});