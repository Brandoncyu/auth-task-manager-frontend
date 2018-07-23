const createNewListsTemplate = require('../templates/createNewList')
const cardDoing = require('../templates/cardDoing')
const cardDone = require('../templates/cardDone')
const moment = require('moment')

function listGroupRender(lists, element) {
  document.getElementById('task-form').innerHTML = createNewListsTemplate()
  let dataId = element.getAttribute('data-id')

  let taskList = lists.find(task => task.id === parseInt(dataId)).tasks

  let accumulatorDoing = ''
  let accumulatorDone = ''

  taskList.forEach(card => {
    if (card.completed === false) {

      let createdTime = moment(card.created_at).toNow(true)

      accumulatorDoing += cardDoing(card.title, card.description, card.id, `Created ${createdTime} ago`)
      
    } else {

      let updatedTime = moment(card.updated_at).toNow(true)

      accumulatorDone += cardDone(card.title, card.description, card.id, `Created ${updatedTime} ago`)
    }
  })
  document.getElementById('doing-group').innerHTML = accumulatorDoing
  document.getElementById('done-group').innerHTML = accumulatorDone

}

module.exports = listGroupRender
