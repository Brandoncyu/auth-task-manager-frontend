const loginTemplate = require('../templates/login')
const registerTemplate = require('../templates/register')
const login = document.getElementById('login-button')
const register = document.getElementById('register-button')
const baseURL = `http://localhost:5000`

login.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

  let loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let loginField = document.getElementById('login-email').value
    let passwordField = document.getElementById('pword').value
    console.log({email: loginField, password: passwordField})
    axios.post(`${baseURL}/api/users/login`, {
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
})

register.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

})
