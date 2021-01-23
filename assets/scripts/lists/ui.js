'use strict'

const onCreateListSuccess = function (data) {
  $('#index-list').show()
  $('#message').text('created list')
  $('form').trigger('reset')
  $('#create-list').trigger('reset')
}

const onCreateListFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
  $('form').trigger('reset')
}

const onIndexListSuccess = function (responseData) {
  console.log(responseData)
  $('#message').text('here are your incomplete lists: ')
  $('#message2').hide()
  $('#response-text').html('')
  responseData.lists.forEach(lists => {
    const viewLists = (`
      <p>${lists.name}</p>
      <p>ID: ${lists._id}</p>
  `)
    $('#response-text').append(viewLists)
  })
}

const onIndexListFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
}

const onShowListSuccess = function (responseData) {
  $('#response-text').trigger('reset')
  $('#response-text').text('were you looking for?: ' + responseData.list.name)
  $('form').trigger('reset')
  $('#message').trigger('reset')
  $('#message2').trigger('reset')
}

const onShowListFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
  $('#response-text').trigger('reset')
  $('form').trigger('reset')
}

const onDestroyListSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('list successfully deleted')
  $('#response-text').trigger('reset')
}

const onDestroyListFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
  $('form').trigger('reset')
}

const onUpdateListSuccess = function () {
  $('#message').text('list successfully updated')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

const onUpdateListFailure = function (error) {
  $('#message').text('Error: ' + error + ' Try Again?')
  $('form').trigger('reset')
  $('#response-text').trigger('reset')
}

module.exports = {
  onCreateListSuccess,
  onCreateListFailure,
  onIndexListSuccess,
  onIndexListFailure,
  onShowListSuccess,
  onShowListFailure,
  onDestroyListSuccess,
  onDestroyListFailure,
  onUpdateListSuccess,
  onUpdateListFailure
}
