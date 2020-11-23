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
  api.show(data)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onDeleteTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroy(data)

    .then(ui.onDestroySuccess)
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
