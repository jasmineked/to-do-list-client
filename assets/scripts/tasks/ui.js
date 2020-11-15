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
  console.log(responseData)
$('#response-text').trigger('reset')
$('#response-text').text('were you looking for?: ' + responseData.task.text)
$('form').trigger('reset')
$('#message').trigger('reset')
}

const onShowFailure = function (error) {
  $('#message').text('error displaying task')
  console.log(error)
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
  // $('#message2').text(data.task)
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
