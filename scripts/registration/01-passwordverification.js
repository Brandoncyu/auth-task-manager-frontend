const renderRegisterError = require('./02-registerError')

function verify(event) {
  event.preventDefault()
  let loginField = document.getElementById('register-email').value
  let passwordField = document.getElementById('register-password').value
  let firstName = document.getElementById('first-name').value
  let lastName = document.getElementById('last-name').value
  console.log(loginField, passwordField)
  axios.post(`${baseURL}/api/users/signup`, {
    first_name: firstName,
    last_name: lastName,
    email: loginField,
    password: passwordField
  }).then(response => {
    const token = localStorage.setItem('token', response.data.token)
    document.getElementById('register-email').value = ''
    document.getElementById('register-password').value = ''
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''

    return axios.get(`${baseURL}/api/lists`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }).catch(error => {
    renderRegisterError(error)
  })
}

module.exports = verify
