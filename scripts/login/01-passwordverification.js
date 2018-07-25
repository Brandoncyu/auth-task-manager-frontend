const renderLoginError = require('./02-loginError')
const loginMode = require('../modes/loginMode')
const allList = require('../render/allList')

function verify(event) {
  event.preventDefault()
  let loginField = document.getElementById('login-email').value
  let passwordField = document.getElementById('login-password').value

  axios.post(`${baseURL}/api/users/login`, {
    email: loginField,
    password: passwordField
  }).then(response => {
    const token = localStorage.setItem('token', response.data.token)
    loginMode()
    allList()

  }).catch(error => {
    renderLoginError(error)
  })
}

module.exports = verify
