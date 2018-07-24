const registerTemplate = require('../templates/register')
const verify = require('./01-passwordverification')

function registrationForm() {
  document.querySelector('title').textContent = 'Register'
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

  let registerForm = document.getElementById('register')
  registerForm.addEventListener('submit', verify)
}

module.exports = registrationForm
