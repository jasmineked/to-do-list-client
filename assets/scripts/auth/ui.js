'use strict'
// here, we handle the API response
const store = require('../store')
const { onIndexList } = require('../lists/events')
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
  // response
  $('form').trigger('reset')
  store.user = data.user
  onIndexList()
  $('#message').text('welcome back')
  $('#response-text').trigger('reset')
  $('#response-text').show()
  $('#essence').hide()
  $('#sidebar').show()
  $('#content').show()
  $('#unauthenticated-ui').hide()

  // landing page is the homepage for unauth users
  $('#landingpage').hide()
  // auth actions
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('#change-pw-button').show()
  $('#nav-sign-up').hide()
  $('#nav-sign-in').hide()
  $('#settingsNavDropdown').show()

  // task actions
  $('#index-task').show()
  $('#create-task-button').show()
  $('#show-task-button').show()
  $('#update-task-button').show()
  $('#delete-task-button').show()
  $('#show-task').show()

  // list actions
  $('#index-list-button').show()
  $('#listNavDropdown').show()

  // household actions
  $('#accountEditNavDropdown').show()
}
const signInFailure = function (data) {
  $('#message').text('error on sign in')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

const signOutSuccess = function () {
  // response
  $('form').trigger('reset')
  $('#response-text').hide()
  $('#essence').show()
  // $('#message').text('see you soon')
  // resetting ui to default
  $('#sidebar').hide()
  $('.wrapper').show()
  $('#unauthenticated-ui').show()
  $('#content').hide()
  $('#landingpage').show()

  // auth
  $('#sign-out').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#nav-sign-in').show()
  $('#nav-sign-up').show()
  $('#sign-out').hide()
  $('#change-pw').hide()
  $('#change-pw-button').hide()

  // task
  $('#index-task').hide()
  $('#show-task').hide()
  $('#delete-task').hide()
  $('#update-task').hide()
  $('#create-task').hide()
  $('#create-task-button').hide()
  $('#show-task-button').hide()
  $('#update-task-button').hide()
  $('#delete-task-button').hide()

  // list
  $('#create-list').hide()
  $('#update-list').hide()
  $('#index-list-button').hide()
  $('#listNavDropdown').hide()
  $('#settingsNavDropdown').hide()

  $('#accountEditNavDropdown').hide()
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error: ' + error)
  $('form').trigger('reset')
  $('#response-text').hide()
}

const changePwSuccess = function (data) {
  $('#message').text('Password successfully changed.')
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
