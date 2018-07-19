const loginTemplate = require('../templates/login')
const registerTemplate = require('../templates/register')
const newListTemplate = require('../templates/newList')
const login = document.getElementById('login-button')
const register = document.getElementById('register-button')
const listButton = document.getElementById('list-button')

login.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

  let loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let loginField = document.getElementById('login-email').value
    let passwordField = document.getElementById('pword').value
    console.log(loginField, passwordField)
  })
})

register.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

})

listButton.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = newListTemplate()

  let listForm = document.getElementById('list-form')
  listForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let listTitleField = document.getElementById('list-title').value
    console.log(listTitleField)

  })
})
