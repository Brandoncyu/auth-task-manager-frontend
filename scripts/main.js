const loginForm = require('./login/00-loginform')
const registrationForm = require('./registration/00-registrationform')
const login = document.getElementById('login-button')
const register = document.getElementById('register-button')
const listButton = document.getElementById('list-button')
const logoutButton = document.getElementById('logout-button')
const newListTemplate = require('./templates/newList')
window.baseURL = `https://whispering-shore-93216.herokuapp.com`

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
})

logoutButton.addEventListener('click', function() {
  localStorage.removeItem('token')
  document.getElementById('gate-buttons').setAttribute('style', 'display:none')
  document.getElementById('key-buttons').setAttribute('style', 'display:block')
  document.getElementById('list-container').setAttribute('style', 'display:none')
  document.getElementById('form-container').innerHTML = ''
  document.getElementById('all-group').innerHTML = ''
  document.getElementById('done-group').innerHTML = ''
  document.getElementById('doing-group').innerHTML = ''
})
