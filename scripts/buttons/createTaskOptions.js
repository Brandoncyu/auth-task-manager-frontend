function createTaskOptions(event) {
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
    const allList = require('./allList')
    document.getElementById('task-title').value = ''
    document.getElementById('task-content').value = ''
    allList()

  }).catch(error => {
    console.log(error)
  })
}

module.exports = createTaskOptions
