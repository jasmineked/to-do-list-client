'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexTask = function () {
  // make API call to get all of the tasks
  api.index()
  // if API call us successful then pass the data to the onIndexSuccess function
    .then(ui.onIndexSuccess)
  // if API call fails then run our onError function
    .catch(ui.onIndexFailure)
}

const onShowTask = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()
  // create a JS object from the form where the user entered the task id
  const data = getFormFields(event.target)
  // make API call for getting one task with the data we grabbed from the form
  api.show(data)
  // if the apiData is successful then pass the data to the onShowSuccess
  // function
    .then(ui.onShowSuccess)
  // if the API call fails then run our onError function
    .catch(ui.onShowFailure)
}

const onDeleteTask = function (event) {
  event.preventDefault()
  // create a JS object from the form where the user entered the task id
  const data = getFormFields(event.target)
  // make API call for deleting one task with the data we grabbed from the data
  api.destroy(data)
  // if the API call is successful then invoke the onDestroySuccess function
    .then(ui.onDestroySuccess)
  // if the API call is successful then invoke the onDestroySuccess function
    .catch(ui.onDestroyFailure)
}

const onUpdateTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onCreateTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

module.exports = {
  onShowTask,
  onIndexTask,
  onDeleteTask,
  onUpdateTask,
  onCreateTask
}
