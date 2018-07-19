const registerTemplate = require('../templates/register')

function registrationForm() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

}

module.exports = registrationForm
