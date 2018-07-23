const cancelListOptions = require('./cancelListOptions')
const listFormOptions = require('./listFormOptions')
const newListTemplate = require('../templates/newList')

function listButtonOptions() {
  const container = document.getElementById('form-container')
  document.getElementById('list-container').setAttribute('style', 'display:none')
  container.innerHTML = newListTemplate()

  let listForm = document.getElementById('list-form')
  listForm.addEventListener('submit', listFormOptions)

  let cancelListButton = document.getElementById('cancel-list')
  cancelListButton.addEventListener('click', cancelListOptions)
}

module.exports = listButtonOptions
