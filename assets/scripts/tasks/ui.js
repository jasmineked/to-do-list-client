'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Task successfully created')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('onCreateSuccess ran. Data is:', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error creating task')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.error('onCreateFailure ran. Error is:', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All tasks successfully received')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('onIndexSuccess ran. Data is:', data.Tasks)
}

const onIndexFailure = function (error) {
  $('#message').text('All tasks successfully displayed')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.log('onIndexFailure ran. Error is:', error)
}

const onShowSuccess = function (data) {
  $('#message').text('Selected task displayed')
  $('#message').text(data.task.text)
  console.log('onShowSuccess ran. Data is:', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error displaying selected task')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.error('onShowFailure ran. Error is:', error)
}

const onDestroySuccess = function () {
  $('#message').text('Task successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('Task successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error deleting task')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.log('onDestroyFailure ran. Error is:', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Task successfully updated')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('Tasks successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating task')
  $('#message').removeClass()
  $('#message').addClass('Failure')
  console.error('onUpdateFailure ran. Error is:', error)
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
