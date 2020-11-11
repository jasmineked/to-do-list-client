'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Task successfully created')
}

const onCreateFailure = function (error) {
  $('#message').text('Error creating task')
}

const onIndexSuccess = function (responseData) {
  console.log(responseData)

  $('#message').html('')

  responseData.tasks.forEach(tasks => {
    const taskList = (`
      <p>Task: ${tasks.text}</p>
      <p>Due Date: ${tasks.dueDate}</p>
  `)
    $('#message').append(taskList)
  })
}

const onIndexFailure = function (error) {
  $('#message').text('try again')
}

const onShowSuccess = function (data) {
  $('#message').text('Selected task displayed')
}

const onShowFailure = function (error) {
  $('#message').text('Error displaying selected task')
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
