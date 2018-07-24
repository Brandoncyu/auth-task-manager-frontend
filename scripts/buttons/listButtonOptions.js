const listSubmit = require('./listSubmit')
const newListTemplate = require('../templates/newList')

function listButtonOptions() {
  const container = document.getElementById('form-container')
  document.getElementById('list-container').setAttribute('style', 'display:none')

  container.innerHTML = newListTemplate()

  let listForm = document.getElementById('list-form')
  listForm.addEventListener('submit', listSubmit)

  let cancelListButton = document.getElementById('cancel-list')
  cancelListButton.addEventListener('click', showList)
}

function showList() {
  document.getElementById('form-container').innerHTML = ''
  document.getElementById('list-container').setAttribute('style', 'display:block')
}

module.exports = listButtonOptions
