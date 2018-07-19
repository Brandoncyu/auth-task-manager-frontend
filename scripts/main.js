const loginForm = require('./login/00-loginform')
const registrationForm = require('./registration/00-registrationform')
const login = document.getElementById('login-button')
const register = document.getElementById('register-button')

login.addEventListener('click', loginForm)

register.addEventListener('click', registrationForm)
