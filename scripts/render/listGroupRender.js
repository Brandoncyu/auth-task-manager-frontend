const createNewListsTemplate = require('../templates/createNewList')
const cardDoing = require('../templates/cardDoing')
const cardDone = require('../templates/cardDone')

function listGroupRender(lists, element) {
  document.getElementById('task-form').innerHTML = createNewListsTemplate()
  let dataId = element.getAttribute('data-id')
  let taskList = lists.find(task => task.id === parseInt(dataId)).tasks

  let accumulatorDoing = ''
  let accumulatorDone = ''

  taskList.forEach(card => {
    if (card.completed === false) {
      accumulatorDoing += cardDoing(card.title, card.description, card.id, card.created_at)
    } else {
      accumulatorDone += cardDone(card.title, card.description, card.id, card.updated_at)
    }
  })
  document.getElementById('doing-group').innerHTML = accumulatorDoing
  document.getElementById('done-group').innerHTML = accumulatorDone

}

module.exports = listGroupRender
