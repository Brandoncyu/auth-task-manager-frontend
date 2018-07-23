const allListsTemplate = require('../templates/allLists')

const listGroupRender = require('./listGroupRender')

function allListRender(lists) {
  let accumulator = ''
  lists.forEach(element => accumulator += allListsTemplate(element.id, element.title))
  document.getElementById('all-group').innerHTML = accumulator

  let listGroup = document.querySelectorAll('.list-group-item')

  listGroup.forEach(element => element.addEventListener('click', function(event) {
    listGroup.forEach(element => {
      element.classList.remove('active')
      element.children[0].classList.add('d-none')
    })

    listGroupRender(lists, element)
    event.target.classList.add('active')
    event.target.children[0].classList.remove('d-none')
  }))
}

module.exports = allListRender
