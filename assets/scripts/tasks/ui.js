'use strict'

const store = require('../store')

const onCreateSuccess = function (data) {
  $('#message').text('Task successfully created')
  $('#create-task-button').hide()
  $('#index-task').show()
}

const onCreateFailure = function (error) {
  $('#message').text('Error creating task. Try again?')
}

const onIndexSuccess = function (responseData) {
$('#message').text('Task successfully created')
// replace before 9am^^^
$('#message').html('')
responseData.tasks.forEach(tasks => {
    const taskList = (`
      <p>Task: ${tasks.text}</p>
      <p>Due Date: ${tasks.dueDate}</p>
      <p>Owner: ${tasks.owner}</p>
  `)
    $('#message').append(taskList)
  })
}

const onIndexFailure = function (error) {
  $('#message').text('Erro viewing all tasks. Try again?')
}

const onShowSuccess = function (responseData) {
$('#message').text('Were you looking for?: ' + responseData.task.text)
}

const onShowFailure = function (error) {
  $('#message').text('Error displaying task')
}

const onDestroySuccess = function () {
  $('#message').text('Task successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error deleting task')
}

const onUpdateSuccess = function () {
  $('#message').text('Task successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating task')
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
