function taskChangeRender(newListId) {
  axios.get(`${baseURL}/api/lists`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(newResponse => {
    const listGroupRender = require('./listGroupRender')
    const allListRender = require('./allListRender')
    let lists = newResponse.data.lists

    allListRender(lists)

    listGroupRender(lists, newListId)

    let newListGroupItems = document.querySelectorAll('.list-group-item')
    newListGroupItems.forEach(element => {
      let nodeListId = element.getAttribute('list-id')

      if (parseInt(nodeListId) === parseInt(newListId)) {
        element.classList.add('active')
        element.children[0].classList.add('d-none')
      }
    })

  }).catch(error => {
    console.log(error)
  })
}

module.exports = taskChangeRender
