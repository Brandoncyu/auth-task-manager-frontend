// window.baseURL = `http://localhost:5000`
window.baseURL = `https://whispering-shore-93216.herokuapp.com`
const login = document.getElementById('login-button')
const loginForm = require('./login/00-loginform')
const register = document.getElementById('register-button')
const registrationForm = require('./registration/00-registrationform')
const logoutButton = document.getElementById('logout-button')
const logoutOptions = require('./render/logoutOptions')
const listButton = document.getElementById('list-button')
const listButtonOptions = require('./buttons/listButtonOptions')

login.addEventListener('click', loginForm)

register.addEventListener('click', registrationForm)

listButton.addEventListener('click', listButtonOptions)

logoutButton.addEventListener('click', logoutOptions)
