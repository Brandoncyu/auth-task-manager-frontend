const loginTemplate = require('../templates/login')
const registerTemplate = require('../templates/register')
const login = document.getElementById('login')
const register = document.getElementById('register')

login.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

})


register.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

})
