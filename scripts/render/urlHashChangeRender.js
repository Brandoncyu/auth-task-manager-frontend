const logoutMode = require('../modes/logoutMode')

function urlHashChangeRender() {
  if (!window.location.hash.includes('#/lists/')) {
    logoutMode()
  }
  let urlId = parseInt(window.location.hash.split('#/lists/')[1])

  axios.get(`${baseURL}/api/lists`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    const taskChangeRender = require('./taskChangeRender')
    const logoutMode = require('../modes/logoutMode')
    let lists = response.data.lists
    let reducedList = lists.map(element => element.id)

    if (reducedList.includes(urlId)) {
      taskChangeRender(urlId)
    } else {
      logoutMode()
    }

  }).catch(error => console.log(error))

}

module.exports = urlHashChangeRender
