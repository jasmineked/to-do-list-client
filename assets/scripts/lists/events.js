'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexList = function () {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowList = function (event) {
  event.preventDefault()
  const form = (event.target)
  const data = getFormFields(form)

  api.show(data)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onDeleteList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroy(data)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

const onUpdateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onCreateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.create(data)
    .then(ui.onCreateListSuccess)
    .catch(ui.onCreateListFailure)
}

module.exports = {
  onShowList,
  onIndexList,
  onDeleteList,
  onUpdateList,
  onCreateList
}
