const allListsTemplate = require('../templates/allLists')

const listGroupRender = require('./listGroupRender')
const removeListOptions = require('../buttons/removeListOptions')

function allListRender(lists) {
  let accumulator = ''
  lists.forEach(element => accumulator += allListsTemplate(element.id, element.title))
  document.getElementById('all-group').innerHTML = accumulator

  let listGroup = document.querySelectorAll('.list-group-item')

  listGroup.forEach(element => {
    element.addEventListener('click', function(event) {
      listGroup.forEach(element => {
        element.classList.remove('active')
        element.children[0].classList.remove('d-none')
      })

      listGroupRender(lists, element)


      let link = event.target
      if (link.nodeName !== 'A') link = link.parentNode

      link.classList.add('active')
      link.children[0].classList.add('d-none')
      link.children[0].addEventListener('click', function() {
        removeListOptions(element)
      })
    })
  })

}

module.exports = allListRender
