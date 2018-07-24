const taskChangeRender = require('../render/taskChangeRender')

function taskCompleted(event) {
  event.preventDefault()
  let taskId = event.target.parentNode.getAttribute('task-id')
  let listId = event.target.parentNode.getAttribute('list-id')
  axios(`${baseURL}/api/lists/${listId}/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    data: {
      completed: true
    }
  }).then(response => {
    let newListId = response.data.task.list_id
    taskChangeRender(newListId)
  }).catch(error => {
    console.log(error);
  })
}

module.exports = taskCompleted
