function taskCreate (element) {
  let taskTitle = document.getElementById('task-title').value
  let taskContent = document.getElementById('task-content').value
  let listId = element.getAttribute('list-id')

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
    const allList = require('../render/allList')
    document.getElementById('task-title').value = ''
    document.getElementById('task-content').value = ''
    allList()

  }).catch(error => {
    console.log(error)
  })
}

module.exports = taskCreate
