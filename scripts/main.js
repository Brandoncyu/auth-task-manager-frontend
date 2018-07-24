// window.baseURL = `http://localhost:5000`
window.baseURL = `https://whispering-shore-93216.herokuapp.com`

const loginForm = require('./login/00-loginform')
const registrationForm = require('./registration/00-registrationform')
const logoutOptions = require('./render/logoutOptions')
const listButtonOptions = require('./buttons/listButtonOptions')
const allList = require('./render/allList')
const loginOptions = require('./render/loginOptions')

const login = document.getElementById('login-button')
const register = document.getElementById('register-button')
const logoutButton = document.getElementById('logout-button')
const listButton = document.getElementById('list-button')

if (localStorage.getItem('token') !== null) {
  loginOptions()
  allList()
}

login.addEventListener('click', loginForm)

register.addEventListener('click', registrationForm)

listButton.addEventListener('click', listButtonOptions)

logoutButton.addEventListener('click', logoutOptions)
