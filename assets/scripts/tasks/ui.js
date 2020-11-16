'use strict'

const store = require('../store')

const onCreateSuccess = function (data) {
  $('#message').text(data.task.text)
  $('#message2').text('due: ' + data.task.dueDate)
  $('#create-task-button').hide()
  $('#index-task').show()
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

const onCreateFailure = function (error) {
  $('#message').text('Error creating task. Try again?')
  $('form').trigger('reset')
}

const onIndexSuccess = function (responseData) {
  // console.log(responseData)
  $('#message').text('here are your incomplete tasks: ')
  $('#message2').hide()
  $('#response-text').html('')
  responseData.tasks.forEach(tasks => {
    const taskList = (`
      </br>
      <p>${tasks.text}</p>
      <p>due ${tasks.dueDate}</p>
      <p>Owner: ${tasks.owner}</p>
      <p>ID: ${tasks._id}</p>
      </br>
  `)
    $('#response-text').append(taskList)
  })
}

const onIndexFailure = function (error) {
  $('#message').text('error viewing all tasks. try again?')
}

const onShowSuccess = function (responseData) {
  // can we find a way to implement a scrollbar to #responsetext so that
  $('#response-text').trigger('reset')
  $('#response-text').text('were you looking for?: ' + responseData.task.text)
  $('form').trigger('reset')
  $('#message').trigger('reset')
  $('#message2').trigger('reset')
}

const onShowFailure = function (error) {
  $('#message').text('error displaying task')
  $('#response-text').trigger('reset')
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  $('form').trigger('reset')
  $('#message').text('task successfully deleted')
  $('#response-text').trigger('reset')
}

const onDestroyFailure = function (error) {
  $('#message').text('error deleting task')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
  $('form').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').text('task successfully updated')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#message').text('error on updating task')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
