const renderLoginError = require('./02-loginError')
const allListsTemplate = require('../templates/allLists')
const allListRender = require('../render/allListRender')
const loginOptions = require('../render/loginOptions')

function verify(event) {
  event.preventDefault()
  let loginField = document.getElementById('login-email').value
  let passwordField = document.getElementById('login-password').value
  console.log({email: loginField, password: passwordField})
  axios.post(`${baseURL}/api/users/login`, {
    email: loginField,
    password: passwordField
  }).then(response => {
    const token = localStorage.setItem('token', response.data.token)
    loginOptions()

    return axios.get(`${baseURL}/api/lists`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      let lists = response.data.lists
      console.log(lists)
      allListRender(lists)
    })
  }).catch(error => {
    renderLoginError(error)
  })
}

module.exports = verify
