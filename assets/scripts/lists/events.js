'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexList = function () {
  event.preventDefault()

  api.indexList()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowList = function (event) {
  event.preventDefault()
  const form = (event.target)
  const data = getFormFields(form)
  console.log(data)
  api.showList(data)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onDeleteList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroyList(data)

    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

const onUpdateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateList(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onCreateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createList(data)
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
