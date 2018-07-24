// const localhostURL = 'http://localhost:5000'
// const herokuURL = 'https://whispering-shore-93216.herokuapp.com'
// const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

// window.baseURL = `http://localhost:5000`
window.baseURL = `https://whispering-shore-93216.herokuapp.com`

const loginForm = require('./login/00-loginForm')
const registrationForm = require('./registration/00-registrationForm')
const listButtonOptions = require('./buttons/listButtonOptions')
const taskButtonOption = require('./buttons/taskButtonOption')
const logoutOptions = require('./options/logoutOptions')
const loginOptions = require('./options/loginOptions')
const allList = require('./render/allList')

const login = document.getElementById('login-button')
const register = document.getElementById('register-button')
const listButton = document.getElementById('list-button')
const taskButton = document.getElementById('task-button')
const logoutButton = document.getElementById('logout-button')

if (localStorage.getItem('token') !== null) {
  loginOptions()
  allList()
}

login.addEventListener('click', loginForm)
register.addEventListener('click', registrationForm)

listButton.addEventListener('click', listButtonOptions)
taskButton.addEventListener('click', taskButtonOption)
logoutButton.addEventListener('click', logoutOptions)
