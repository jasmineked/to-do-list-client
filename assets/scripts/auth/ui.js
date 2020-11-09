'use strict'
// here, we handle the API response
const store = require('../store')

// the following are success & failure handler functions
const signUpSuccess = function (data) {
  $('#message').text('Welcome')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('signUpSuccess ran. Data is: ', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.error('signUpFailure ran. Error is:', error)
}

const signInSuccess = function (data) {
  $('#message').text('Welcome back')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('signInSuccess ran. Data is:', data)
  store.user = data.user
}
const signInFailure = function (res) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.error('signInFailure ran. Error is:', res)
}

const signOutSuccess = function () {
  $('#message').text('See you soon')
  $('#message').removeClass()
  $('#message').addClass('Success')
  $('form').trigger('reset')
  console.log('signOutSuccess ran. No return.')
  store.user = null
}

const signOutFailure = function (res) {
  $('#message').text('Guess you\'re stuck with us...')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('signOutFailure ran. Error is:', res)
}

const changePasswordSuccess = function () {
  $('#message').text('Hope you wrote that one down!')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('changePwSuccess ran. No return')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.error('changePasswordFailure ran. Error is:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
