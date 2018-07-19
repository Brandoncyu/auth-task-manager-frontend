const registerTemplate = require('../templates/register')
const baseURL = `http://localhost:5000`

function registrationForm() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

  let registerForm = document.getElementById('register')
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let loginField = document.getElementById('register-email').value
    let passwordField = document.getElementById('register-password').value
    console.log(loginField, passwordField)
    axios.post(`${baseURL}/api/users/signup`, {
      email: loginField,
      password: passwordField
    }).then(response => {
      const token = localStorage.setItem('token', response.data.token)

      return axios.get(`${baseURL}/api/lists`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }).catch(console.log)
  })
}

module.exports = registrationForm
