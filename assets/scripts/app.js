'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const taskEvents = require('./tasks/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#index-task').on('click', taskEvents.onIndexTask)
  $('#show-task').on('submit', taskEvents.onShowTask)
  $('#delete-task').on('submit', taskEvents.onDeleteTask)
  $('#update-task').on('submit', taskEvents.onUpdateTask)
  $('#create-task').on('submit', taskEvents.onCreateTask)

  // these are hidden by default
  $('#sign-up').hide()
  $('#sign-in').hide()
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
  $('#navbarDropdown').hide()
  $('#navbar').hide()

  $('#sign-up-button').click(function () {
    $('#sign-up').show()
    $('#sign-in-button').show()
    $('#sign-up-button').hide()
    $('#sign-in').hide()
    $('#message').text('already joined?')
  })

  $('#sign-in-button').click(function () {
    $('#sign-in').show()
    $('#sign-in-button').hide()
    $('#sign-up-button').show()
    $('#sign-up').hide()
    $('#message').text('not a member?')
  })

  $('#change-pw-button').click(function () {
    $('#change-pw').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#index-task').show()
    $('#show-task').hide()
    $('#delete-task').hide()
    $('#update-task').hide()
    $('#create-task').hide()
    $('#response-text').hide()
  })

  $('#create-task-button').click(function () {
    $('#create-task').show()
    $('#delete-task-button').show()
    $('#create-task-button').show()
    $('#change-pw').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#change-pw').hide()
    $('#index-task').show()
    $('#delete-task').hide()
    $('#update-task').hide()
    $('#update-task-button').show()
  })

  $('#update-task-button').click(function () {
    $('#update-task').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#change-pw').hide()
    $('#delete-task').hide()
    $('#create-task').hide()
  })

  $('#show-task-button').click(function () {
    $('#show-task').show()
    $('#change-pw-button').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#change-pw').hide()
    $('#index-task').show()
    $('#delete-task').hide()
    $('#update-task').hide()
    $('#create-task').hide()
    $('#response-text').trigger('reset')
  })

  $('#delete-task-button').click(function () {
    $('#delete-task').show()
    $('#create-task-button').show()
    $('#update-task-button').show()
    $('#change-pw').show()
    $('#index-task').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#change-pw').hide()
    $('#update-task').hide()
    $('#create-task').hide()
  })

  $('#index-task').click(function () {
    $('#response-text').show()
    $('#change-pw').hide()
  })
})
