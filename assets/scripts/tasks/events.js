'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexTask = function () {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.show(data)
    .then(ui.onShowSuccess)
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
  console.log(data)
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
