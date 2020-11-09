'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  // make GET request to /tasks
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token.user
    }
  })
}

const show = function (task) {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + task.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token.user
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + data.task.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
