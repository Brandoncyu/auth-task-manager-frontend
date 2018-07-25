window.baseURL = `https://whispering-shore-93216.herokuapp.com`

const verify = require('./login/01-passwordVerification')
const loginForm = require('./login/00-loginForm')
const registrationForm = require('./registration/00-registrationForm')
const listButtonOptions = require('./buttons/listButtonOptions')
const taskButtonOption = require('./buttons/taskButtonOption')
const logoutMode = require('./modes/logoutMode')
const loginMode = require('./modes/loginMode')
const allList = require('./render/allList')
const urlHashChangeRender = require('./render/urlHashChangeRender')

const loginFormButton = document.getElementById('login')
const loginButton = document.getElementById('login-button')
const registerButton = document.getElementById('register-button')
const listButton = document.getElementById('list-button')
const taskButton = document.getElementById('task-button')
const logoutButton = document.getElementById('logout-button')

if (localStorage.getItem('token') !== null) {
  loginMode()
  allList()
}

loginFormButton.addEventListener('submit', verify)

loginButton.addEventListener('click', loginForm)
registerButton.addEventListener('click', registrationForm)

listButton.addEventListener('click', listButtonOptions)
taskButton.addEventListener('click', taskButtonOption)
logoutButton.addEventListener('click', logoutMode)

window.onhashchange = () => urlHashChangeRender()
