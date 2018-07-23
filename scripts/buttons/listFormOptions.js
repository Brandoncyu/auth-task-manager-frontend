const allList = require('../render/allList')

function listFormOptions(event) {
  event.preventDefault()
  let listTitleField = document.getElementById('list-title').value

  axios(`${baseURL}/api/lists`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    data: {
      title: listTitleField
    }
  }).then(response => {
    document.getElementById('list-container').setAttribute('style', 'display:block')
    document.getElementById('form-container').innerHTML = ''
    document.getElementById('all-group').innerHTML = ''
    allList()
  }).catch(error => {
    console.log(error)
  })

}

module.exports = listFormOptions
