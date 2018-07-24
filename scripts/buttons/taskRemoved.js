function taskRemoved (event){
    event.preventDefault()
    let taskId = event.target.parentNode.getAttribute('task-id')
    let listId = event.target.parentNode.getAttribute('list-id')
    axios(`${baseURL}/api/lists/${listId}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      const allList = require('../render/allList')
      allList()
    })
    .catch(error => {
      console.log(error);
    })
}

module.exports = taskRemoved
