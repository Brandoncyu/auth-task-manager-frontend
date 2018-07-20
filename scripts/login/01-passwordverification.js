const renderLoginError = require('./02-loginError')

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
    document.getElementById('login-email').value = ''
    document.getElementById('login-password').value = ''

    return axios.get(`${baseURL}/api/lists`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }).catch(error => {
    renderLoginError(error)
  })
}

module.exports = verify
