const allListsTemplate = require('../templates/allLists')

const listGroupRender = require('./listGroupRender')

function allListRender(lists) {
  let accumulator = ''
  lists.forEach(element => accumulator += allListsTemplate(element.id, element.title))
  document.getElementById('all-group').innerHTML = accumulator

  let listGroup = document.querySelectorAll('.list-group-item')
  listGroup.forEach(element => element.addEventListener('click', function() {
    listGroupRender(lists, element)
  }))
}

module.exports = allListRender
