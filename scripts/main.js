window.baseURL = `https://whispering-shore-93216.herokuapp.com`
const login = document.getElementById('login-button')
const loginForm = require('./login/00-loginform')
const register = document.getElementById('register-button')
const registrationForm = require('./registration/00-registrationform')
const logoutButton = document.getElementById('logout-button')
const logoutOptions = require('./render/logoutOptions')

const listButton = document.getElementById('list-button')
const newListTemplate = require('./templates/newList')
const cancelList = require('./buttons/cancelList')

login.addEventListener('click', loginForm)

register.addEventListener('click', registrationForm)

listButton.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = newListTemplate()

  let listForm = document.getElementById('list-form')
  listForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let listTitleField = document.getElementById('list-title').value
    console.log(listTitleField)

  })

  let cancelListButton = document.getElementById('cancel-list')
  cancelListButton.addEventListener('click', cancelList)
})

logoutButton.addEventListener('click', logoutOptions)
