'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const taskEvents = require('./tasks/events')
const listEvents = require('./lists/events')

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
  $('#index-list').on('click', listEvents.onIndexList)
  $('#show-list').on('submit', listEvents.onShowList)
  $('#delete-list').on('submit', listEvents.onDeleteList)
  $('#update-list').on('submit', listEvents.onUpdateList)
  $('#create-list').on('submit', listEvents.onCreateList)

  // these are hidden by default
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-pw').hide()
  $('#show-task').hide()
  $('#delete-task').hide()
  $('#update-task').hide()
  $('#create-task').hide()
  $('#response-text').hide()
  $('#navbarDropdown').hide()
  $('#navbar').hide()
  $('#create-list').hide()

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
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#change-pw').hide()
    $('#index-task').show()
    $('#delete-task').hide()
    $('#update-task').hide()
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

  $('#create-list-button').click(function () {
    $('#response-text').hide()
    $('#create-list').show()
  })
})
