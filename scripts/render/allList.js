const allListsTemplate = require('../templates/allLists')
const allListRender = require('./allListRender')

function allList() {
  axios.get(`${baseURL}/api/lists`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    let lists = response.data.lists

    allListRender(lists)

  }).catch(error => {
    renderLoginError(error)
  })
}

module.exports = allList
