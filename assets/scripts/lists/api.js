'use strict'

const config = require('../config')
const store = require('../store')

const indexList = function () {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroyList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const createList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  indexList,
  showList,
  destroyList,
  updateList,
  createList
}
