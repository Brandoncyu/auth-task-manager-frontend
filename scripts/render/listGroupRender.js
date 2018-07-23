const createNewTaskTemplate = require('../templates/createNewTask')
const cardDoing = require('../templates/cardDoing')
const cardDone = require('../templates/cardDone')

const moment = require('moment')

function listGroupRender(lists, element) {
  document.getElementById('task-form').innerHTML = createNewTaskTemplate()
  let dataId = element.getAttribute('data-id')

  let createTaskForm = document.getElementById('create-task-form')
  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let taskTitle = document.getElementById('task-title').value
    let taskContent = document.getElementById('task-content').value

    axios(`${baseURL}/api/lists/${dataId}/tasks`, {
      method: `POST`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      data: {
        title: taskTitle,
        description: taskContent,
        list_id: dataId
      }
    }).then(response => {
      console.log(response)
      const allList = require('./allList')
      document.getElementById('task-title').value = ''
      document.getElementById('task-content').value = ''
      allList()

    }).catch(error => {
      console.log(error)
    })
  })

  let taskList = lists.find(task => task.id === parseInt(dataId)).tasks

  let accumulatorDoing = ''
  let accumulatorDone = ''

  taskList.forEach(card => {
    if (card.completed === false) {

      let createdTime = moment(card.created_at).toNow(true)

      accumulatorDoing += cardDoing(card.title, card.description, card.id, `Created ${createdTime} ago`)

    } else {

      let updatedTime = moment(card.updated_at).toNow(true)

      accumulatorDone += cardDone(card.title, card.description, card.id, `Updated ${updatedTime} ago`)
    }
  })
  document.getElementById('doing-group').innerHTML = accumulatorDoing
  document.getElementById('done-group').innerHTML = accumulatorDone

}

module.exports = listGroupRender
