'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexList = function () {
  // event.preventDefault()
  api.indexList()
    .then(ui.onIndexListSuccess)
    .catch(ui.onIndexListFailure)
}

const onShowList = function (event) {
  event.preventDefault()
  const form = (event.target)
  const data = getFormFields(form)

  api.showList(data)
    .then(ui.onShowListSuccess)
    .catch(ui.onShowListFailure)
}

const onDeleteList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroyList(data)
    .then(ui.onDestroyListSuccess)
    .catch(ui.onDestroyListFailure)
}

const onUpdateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateList(data)
    .then(ui.onUpdateListSuccess)
    .catch(ui.onUpdateListFailure)
}

const onCreateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createList(data)
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
