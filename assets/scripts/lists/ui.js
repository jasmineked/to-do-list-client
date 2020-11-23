'use strict'

const store = require('../store')

const onCreateSuccessList = function (data) {
  $('#index-list').show()
  $('#message').text('created list')
  $('form').trigger('reset')
  $('#list-form').trigger('reset')

}

const onCreateFailureList = function (error) {
  $('#message').text('error creating list. try again?')
  $('form').trigger('reset')
}

const onIndexSuccessList = function (responseData) {
  // console.log(responseData)
  $('#message').text('here are your incomplete lists: ')
  $('#message2').hide()
  $('#response-text').html('')
  responseData.lists.forEach(lists => {
    const list = (`
      <p>${list.text}</p>
      <p>ID: ${list._id}</p>
  `)
    $('#response-text').append(list)
  })
}

const onIndexFailureList = function (error) {
  $('#message').text('error viewing all lists. try again?')
}

const onShowSuccessList = function (responseData) {
  $('#response-text').trigger('reset')
  $('#response-text').text('were you looking for?: ' + responseData.list.text)
  $('form').trigger('reset')
  $('#message').trigger('reset')
  $('#message2').trigger('reset')
}

const onShowFailureList = function (error) {
  $('#message').text('error displaying list')
  $('#response-text').trigger('reset')
  $('form').trigger('reset')
}

const onDestroySuccessList = function () {
  $('form').trigger('reset')
  $('#message').text('list successfully deleted')
  $('#response-text').trigger('reset')
}

const onDestroyFailureList = function (error) {
  $('#message').text('error deleting list')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
  $('form').trigger('reset')
}

const onUpdateSuccessList = function () {
  $('#message').text('list successfully updated')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

const onUpdateFailureList = function (error) {
  $('#message').text('error on updating list')
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
