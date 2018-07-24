const createNewTaskTemplate = require('../templates/createNewTask')
const cardDoing = require('../templates/cardDoing')
const cardDone = require('../templates/cardDone')
const taskCompleted = require('../buttons/taskCompleted')
const taskRemoved = require('../buttons/taskRemoved')
const taskCreate = require('../buttons/taskCreate')

const moment = require('moment')

function listGroupRender(lists, listId) {
  document.getElementById('task-form').innerHTML = createNewTaskTemplate()

  let createTaskForm = document.getElementById('create-task-form')

  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    taskCreate(listId)
  })

  let taskList = lists.find(task => task.id === parseInt(listId)).tasks

  let accumulatorDoing = ''
  let accumulatorDone = ''

  taskList.forEach(card => {
    if (card.completed === false) {
      let createdTime = moment(card.created_at).toNow(true)
      accumulatorDoing += cardDoing(card.title, card.description, card.id, card.list_id, createdTime)

    } else {
      let updatedTime = moment(card.updated_at).toNow(true)
      accumulatorDone += cardDone(card.title, card.description, card.id, card.list_id, updatedTime)
    }
  })

  document.getElementById('doing-group').innerHTML = accumulatorDoing
  document.getElementById('done-group').innerHTML = accumulatorDone

  let completeButtons = document.querySelectorAll('#doing-complete-button')
  completeButtons.forEach(element => {
    element.addEventListener('click', taskCompleted)
  })

  let removeButtons = document.querySelectorAll('#done-remove-button')
  removeButtons.forEach(element => {
    element.addEventListener('click', taskRemoved)
  })
}

module.exports = listGroupRender
