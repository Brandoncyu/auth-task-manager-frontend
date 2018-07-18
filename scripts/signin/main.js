const loginTemplate = require('../templates/login')
const registerTemplate = require('../templates/register')
const login = document.getElementById('login-button')
const register = document.getElementById('register-button')

login.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

  let loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let loginField = document.getElementById('login-email').value
    let passwordField = document.getElementById('pword').value
    console.log(loginField, passwordField)
  })
})

register.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

})
