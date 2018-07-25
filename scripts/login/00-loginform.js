const loginTemplate = require('../templates/login')
const verify = require('./01-passwordVerification')

function loginForm() {
  document.querySelector('title').textContent = 'Sign In'
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

  let loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', verify)
}

module.exports = loginForm
