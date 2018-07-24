const taskChangeRender = require('../render/taskChangeRender')

function taskCreate(listId) {
  let taskTitle = document.getElementById('task-title').value
  let taskContent = document.getElementById('task-content').value

  axios(`${baseURL}/api/lists/${listId}/tasks`, {
    method: `POST`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    data: {
      title: taskTitle,
      description: taskContent,
      list_id: listId
    }
  }).then(response => {
    document.getElementById('task-title').value = ''
    document.getElementById('task-content').value = ''

    let newListId = response.data.task.list_id
    taskChangeRender(newListId)
  }).catch(error => {
    console.log(error)
  })
}

module.exports = taskCreate
