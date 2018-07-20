const registerAlertTemplate = require('../templates/registerAlert')

function renderRegisterError(error) {
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('register-email').value = ''
    document.getElementById('register-password').value = ''

    const registerAlert = document.getElementById('register-alert')

    registerAlert.innerHTML = registerAlertTemplate()

    setTimeout(function() {
      registerAlert.innerHTML = ''
    }, 4000)

}

module.exports = renderRegisterError
