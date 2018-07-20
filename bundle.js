(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const loginTemplate = require('../templates/login')

const verify = require('./01-passwordverification')

function loginForm() {
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

  let loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', verify)
}

module.exports = loginForm

},{"../templates/login":8,"./01-passwordverification":2}],2:[function(require,module,exports){
const renderLoginError = require('./02-loginError')

function verify(event) {
  event.preventDefault()
  let loginField = document.getElementById('login-email').value
  let passwordField = document.getElementById('login-password').value
  console.log({email: loginField, password: passwordField})
  axios.post(`${baseURL}/api/users/login`, {
    email: loginField,
    password: passwordField
  }).then(response => {
    const token = localStorage.setItem('token', response.data.token)
    document.getElementById('login-email').value = ''
    document.getElementById('login-password').value = ''

    return axios.get(`${baseURL}/api/lists`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }).catch(error => {
    renderLoginError(error)
  })
}

module.exports = verify

},{"./02-loginError":3}],3:[function(require,module,exports){
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

},{"../templates/loginAlert":9}],4:[function(require,module,exports){
const loginForm = require('./login/00-loginform')
const registrationForm = require('./registration/00-registrationform')
const login = document.getElementById('login-button')
const register = document.getElementById('register-button')
const listButton = document.getElementById('list-button')
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

},{"./login/00-loginform":1,"./registration/00-registrationform":5,"./templates/newList":10}],5:[function(require,module,exports){
const registerTemplate = require('../templates/register')
const verify = require('./01-passwordverification')

function registrationForm() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

  let registerForm = document.getElementById('register')
  registerForm.addEventListener('submit', verify)
}

module.exports = registrationForm

},{"../templates/register":11,"./01-passwordverification":6}],6:[function(require,module,exports){
const renderRegisterError = require('./02-registerError')

function verify(event) {
  event.preventDefault()
  let loginField = document.getElementById('register-email').value
  let passwordField = document.getElementById('register-password').value
  let firstName = document.getElementById('first-name').value
  let lastName = document.getElementById('last-name').value
  console.log(loginField, passwordField)
  axios.post(`${baseURL}/api/users/signup`, {
    first_name: firstName,
    last_name: lastName,
    email: loginField,
    password: passwordField
  }).then(response => {
    const token = localStorage.setItem('token', response.data.token)
    document.getElementById('register-email').value = ''
    document.getElementById('register-password').value = ''
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''

    return axios.get(`${baseURL}/api/lists`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }).catch(error => {
    renderRegisterError(error)
  })
}

module.exports = verify

},{"./02-registerError":7}],7:[function(require,module,exports){
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

},{"../templates/registerAlert":12}],8:[function(require,module,exports){
const loginTemplate = () => {
  return `
    <div class="col-6 p-4 border rounded">
    <h3>Login</h3>
    <hr>
      <form id="login">
        <div class="form-group">
          <label for="login-email">Email address</label>
          <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter email" value="student@galvanize.com" required>
        </div>
        <div class="form-group">
          <label for="login-password">Password</label>
          <input type="password" class="form-control" id="login-password" placeholder="Password" value="password" required>
        </div>
        <button type="submit" class="btn btn-primary" id="sumbit-login">Login</button>
      </form>
      <span id="login-alert"></span>
    </div>`
}

module.exports = loginTemplate

},{}],9:[function(require,module,exports){
const loginAlertTemplate = () => {
  return `
  <br>
  <div class="alert alert-danger" role="alert">
  Email or password is incorrect. Please try again
  </div>`
}

module.exports = loginAlertTemplate

},{}],10:[function(require,module,exports){
const newListTemplate = () => {
  return `
  <h3>New List</h3>
  <hr>
  <form id="list-form">
    <div class="form-group">
      <label for="list-title">Title</label>
      <input type="text" class="form-control" id="list-title" placeholder="Enter List Title" required>
    </div>
    <button type="submit" class="btn btn-success" id="sumbit-list">Create New List</button>
  </form>`
}

module.exports = newListTemplate

},{}],11:[function(require,module,exports){
const registerTemplate = () => {
  return `
  <div class="col-6 p-4 border rounded">
    <h3>Register</h3>
    <hr>
      <form id="register">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="first-name" class="form-control" id="first-name" placeholder="First Name" required>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="last-name" class="form-control" id="last-name" placeholder="Last Name" required>
        </div>
        <div class="form-group">
          <label for="register-email">Email address</label>
          <input type="email" class="form-control" id="register-email" aria-describedby="emailHelp" placeholder="Enter Email" required>
        </div>
        <div class="form-group">
          <label for="register-password">Password</label>
          <input type="password" class="form-control" id="register-password" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-info" id="sumbit-login">Register</button>
      </form>
      <span id="register-alert"></span>
    </div>`
}

module.exports = registerTemplate

},{}],12:[function(require,module,exports){
const registerAlertTemplate = () => {
  return `<br>
  <div class="alert alert-danger" role="alert">
  Email is taken. Please register with a different email.
  </div>`
}

module.exports = registerAlertTemplate

},{}]},{},[4]);
