function removeListOptions(element) {
  const allList = require('../render/allList')
  let listId = element.getAttribute('new-id')

  axios.delete(`${baseURL}/api/lists/${listId}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {

    allList()
  }).catch(error => {
    console.log(error)
  })
}

module.exports = removeListOptions
