'use strict'

const store = require('../store')

const onCreateSuccess = function (data) {
  $('#message').text('Task successfully created')
  $('#create-task-button').hide()
  $('#index-task').show()
  // $('#id').text()
}

const onCreateFailure = function (error) {
  $('#message').text('Error creating task. Try again?')
}

const onIndexSuccess = function (responseData) {
$('#message').text('here are your incomplete task: ')
// replace before 9am^^^
$('#response-text').html('')
responseData.tasks.forEach(tasks => {
    const taskList = (`
      </br>
      <p>Task: ${tasks.text}</p>
      <p>Due Date: ${tasks.dueDate}</p>
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
$('#response-text').trigger('reset')
$('#response-text').text('were you looking for?: ' + responseData.tasks.text)
}

const onShowFailure = function (error) {
  $('#message').text('error displaying task')
  $('#response-text').trigger('reset')
}

const onDestroySuccess = function () {
  $('#message').text('task successfully deleted')
  $('#response-text').trigger('reset')
}

const onDestroyFailure = function (error) {
  $('#message').text('error deleting task')
  $('#response-text').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').text('task successfully updated')
  $('#response-text').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#message').text('error on updating task')
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
