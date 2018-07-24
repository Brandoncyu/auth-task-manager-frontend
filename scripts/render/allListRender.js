const allListsTemplate = require('../templates/allLists')
const listTaskRender = require('./listTaskRender')
const listRemove = require('../buttons/listRemove')

function allListRender(lists) {
  let accumulator = ''
  lists.forEach(element => accumulator += allListsTemplate(element.id, element.title))
  document.getElementById('all-group').innerHTML = accumulator

  let listGroup = document.querySelectorAll('.list-group-item')
  listGroup.forEach(element => {
    element.addEventListener('click', function(event) {
      if (event.target.tagName !== 'SPAN') {
        listGroup.forEach(element => {
          element.classList.remove('active')
          element.children[0].classList.remove('d-none')
        })

        let listId = element.getAttribute('list-id')

        listTaskRender(lists, listId)

        let link = event.target
        if (link.nodeName !== 'A') {
          link = link.parentNode
        }

        link.classList.add('active')
        link.children[0].classList.add('d-none')
      }
    })
  })

  let removeListButton = document.querySelectorAll('#remove-list-button')
  removeListButton.forEach(element => {
    element.addEventListener('click', function(event) {
      event.preventDefault()
      listRemove(element)
    })
  })
}

module.exports = allListRender
