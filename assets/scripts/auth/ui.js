'use strict'
// here, we handle the API response
const store = require('../store')



// the following are success & failure handler functions
const signUpSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('#message').text('Welcome', data.user.email)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('#change-pw-button').show()
  $('#index-task-button').show()
  $('#show-task-button').show()
  $('#create-task-button').show()
}

const signUpFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  store.user = data.user
  $('#message').text('Welcome back', data.user.email)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('#change-pw-button').show()
  $('#index-task-button').show()
  $('#show-task-button').show()
  $('#create-task-button').show()

}
const signInFailure = function (data) {
  $('#message').text('Error on sign in')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('See you soon')
  $('#sign-out').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Guess you\'re stuck with us...')
  $('form').trigger('reset')
}

const changePwSuccess = function (data) {
  $('#message').text('Hope you wrote that one down!')
  $('#form').trigger('reset')
  $('#change-pw').hide()
}

const changePwFailure = function (error) {
  $('#message').text('Error on change password')
  $('form').trigger('reset')
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
