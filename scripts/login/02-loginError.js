const loginAlertTemplate = require('../templates/loginAlert')

function renderLoginError(error) {
    document.getElementById('login-email').value = ''
    document.getElementById('login-password').value = ''

    const loginAlert = document.getElementById('login-alert')

    loginAlert.innerHTML = loginAlertTemplate()

    setTimeout(function() {
      loginAlert.innerHTML = ''
    }, 4000)

}

module.exports = renderLoginError
