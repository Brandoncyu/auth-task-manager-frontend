const renderRegisterError = require('./02-registerError')
const loginForm = require('../login/00-loginForm')

function verify(event) {
  event.preventDefault()

  let loginField = document.getElementById('register-email').value
  let passwordField = document.getElementById('register-password').value
  let firstName = document.getElementById('first-name').value
  let lastName = document.getElementById('last-name').value

  axios.post(`${baseURL}/api/users/signup`, {
    first_name: firstName,
    last_name: lastName,
    email: loginField,
    password: passwordField
  }).then(response => {
    const token = localStorage.setItem('token', response.data.token)

    loginForm()
    document.getElementById('login-email').value = loginField

  }).catch(error => {
    renderRegisterError(error)
  })
}

module.exports = verify
