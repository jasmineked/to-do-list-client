'use strict'
// here, we handle the API response
const store = require('../store')

// the following are success & failure handler functions
const signUpSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
  $('#message').text('welcome')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').show()
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
  $('#message').text('error signing up')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  store.user = data.user
  $('#navbar').show()
  $('#message').text('welcome back')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('#change-pw-button').show()
  $('#index-task').show()
  $('#response-text').trigger('reset')
  $('#essence').hide()
  $('#show-task').show()
}
const signInFailure = function (data) {
  $('#message').text('error on sign in')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('see you soon')
  $('#sign-out').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#sign-out').hide()
  $('#change-pw').hide()
  $('#change-pw-button').hide()
  $('#index-task').hide()
  $('#show-task').hide()
  $('#delete-task').hide()
  $('#update-task').hide()
  $('#create-task').hide()
  $('#create-task-button').hide()
  $('#show-task-button').hide()
  $('#update-task-button').hide()
  $('#delete-task-button').hide()
  $('#response-text').hide()
  $('#navbar').hide()
  $('#essence').show()
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Guess you\'re stuck with us...')
  $('form').trigger('reset')
  $('#response-text').hide()
}

const changePwSuccess = function (data) {
  $('#message').text('hope you wrote that one down!')
  $('#form').trigger('reset')
  $('#response-text').trigger('reset')
  $('#change-pw').hide()
  $('#response-text').trigger('reset')
}

const changePwFailure = function (data) {
  $('#response-text').trigger('reset')
  $('#message').text('Try again?')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
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
