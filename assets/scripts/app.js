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
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#index-task').on('click', taskEvents.onIndexTask)
  $('#show-task').on('submit', taskEvents.onShowTask)
  $('#delete-task').on('submit', taskEvents.onDeleteTask)
  $('#update-task').on('submit', taskEvents.onUpdateTask)
  $('#create-task').on('click', taskEvents.onCreateTask)

//  <button id='sign-up' type='submit' value='sign up'>

// these are hidden by default
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-pw').hide()
  $('#change-pw-button').hide()
  $('#index-task-button').hide()
  $('#show-task').hide()
  $('#delete-task').hide()
  $('#update-task').hide()
  $('#create-task').hide()
  $('#create-task-button').hide()
  $('#show-task-button').hide()

  $('#sign-up-button').click(function () {
    $('#sign-up').show()
    $('#sign-in-button').hide()
    $('#sign-up-button').hide()
    })

  $('#sign-in-button').click(function () {
  $('#sign-in').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  })



})
