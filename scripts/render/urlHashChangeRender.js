const logoutOptions = require('../options/logoutOptions')

function urlHashChangeRender() {
  if (!window.location.hash.includes('#/lists/')) {
    logoutOptions()
  }
  let urlId = parseInt(window.location.hash.split('#/lists/')[1])

  axios.get(`${baseURL}/api/lists`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    const taskChangeRender = require('./taskChangeRender')
    const logoutOptions = require('../options/logoutOptions')
    let lists = response.data.lists
    let reducedList = lists.map(element => element.id)

    if (reducedList.includes(urlId)) {
      taskChangeRender(urlId)
    } else {
      logoutOptions()
    }

  }).catch(error => console.log(error))

}

module.exports = urlHashChangeRender
