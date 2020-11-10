'use strict'
// here, we handle the API response
const store = require('../store')

// the following are success & failure handler functions
const signUpSuccess = function (data) {
  $('#message').text('Welcome', data.user.email)
  $('#sign-up').hide()
  // $('#sign-up')[0].reset()
  $('form').trigger('reset')
  console.log('signUpSuccess ran. Data is: ', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('form').trigger('reset')
  console.error('signUpFailure ran. Error is:', error)
}

const signInSuccess = function (data) {
  // $('#sign-up')[0].reset()
  $('form').trigger('reset')
  store.user = data.user
  $('#message').text('Welcome back', data.user.email)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-pw').show()
  $('#sign-out').show()
  console.log('signInSuccess ran. Data is:', data)
}
const signInFailure = function (data) {
  $('#message').text('Error on sign in')
  $('form').trigger('reset')
  console.error('signInFailure ran. Error is:', data)
}

const signOutSuccess = function () {
  $('#message').text('See you soon')
  // $('#sign-out').[0].reset()
  $('#change-pw').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('form').trigger('reset')
  console.log('signOutSuccess ran. No return.')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Guess you\'re stuck with us...')
  $('form').trigger('reset')
  console.log('signOutFailure ran. Error is:', error)
}

const changePwSuccess = function (data) {
  $('#message').text('Hope you wrote that one down!')
  $('#form').trigger('reset')
  // $('#change-pw')[0].reset()
  console.log('changePwSuccess ran. No return')
}

const changePwFailure = function (error) {
  $('#message').text('Error on change password')
  $('form').trigger('reset')
  console.error('changePwFailure ran. Error is:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePwSuccess,
  changePwFailure
}
