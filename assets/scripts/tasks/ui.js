'use strict'
import dateFormat from 'dateformat'
// const store = require('../store')

const onCreateSuccess = function (data) {
  $('#message').text(data.task.text)
  $('#message2').text('due: ' + data.task.dueDate)
  $('#index-task').show()
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

const onCreateFailure = function (data) {
  $('#message').text('error creating task. Try again?')
  $('form').trigger('reset')
}
const onIndexSuccess = function (responseData) {
  console.log(responseData)
  $('#message').text('here are your incomplete tasks: ')
  $('#message2').hide()
  $('#response-text').html('')
  responseData.tasks.forEach(tasks => {
    const viewTasks = (`
    
      <input type='checkbox' value='${tasks.complete}' id='checkedbox'><a href='#update-task'>${tasks.text}</a><br>
      Due:${dateFormat(tasks.dueDate, 'dddd, mmmm dS, yyyy')} <br>
      <p>ID: ${tasks._id}</p>
      `)
    $('#response-text').append(viewTasks)
  })
  const showMe = $('#checkedbox').val()
  alert(showMe)
}

const onIndexFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
}

const onShowSuccess = function (responseData) {
  // can we find a way to implement a scrollbar to #responsetext
  $('#response-text').trigger('reset')
  $('#response-text').text('were you looking for?: ' + responseData.task.text)
  $('form').trigger('reset')
  $('#message').trigger('reset')
  $('#message2').trigger('reset')
}

const onShowFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
  $('#response-text').trigger('reset')
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  $('form').trigger('reset')
  $('#message').text('task successfully deleted')
  $('#response-text').trigger('reset')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
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
  $('#message').text('Error: ' + error + ' Try Again?')
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
