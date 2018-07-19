const loginTemplate = require('../templates/login')

const verify = require('./01-passwordverification')

function loginForm() {
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

  let loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', verify)
}

module.exports = loginForm
