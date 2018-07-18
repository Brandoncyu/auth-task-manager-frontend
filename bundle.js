(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const loginTemplate = require('../templates/login')
const registerTemplate = require('../templates/register')
const login = document.getElementById('login-button')
const register = document.getElementById('register-button')
const baseURL = `http://localhost:5000`

login.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = loginTemplate()

  let loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let loginField = document.getElementById('login-email').value
    let passwordField = document.getElementById('pword').value
    console.log({email: loginField, password: passwordField})
    axios.post(`${baseURL}/api/users/login`, {
      email: loginField,
      password: passwordField
    }).then(response => {
      const token = localStorage.setItem('token', response.data.token)

      return axios.get(`${baseURL}/api/lists`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }).catch(console.log)
  })
})

register.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = registerTemplate()

})

},{"../templates/login":2,"../templates/register":3}],2:[function(require,module,exports){
const loginTemplate = () => {
  return `
    <h3>Login</h3>
    <br>
    <form id="login">
      <div class="form-group">
        <label for="login-email">Email address</label>
        <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter email" value="student@galvanize.com" required>
      </div>
      <div class="form-group">
        <label for="login-password">Password</label>
        <input type="password" class="form-control" id="pword" placeholder="Password" value="password" required>
      </div>
      <button type="submit" class="btn btn-outline-primary" id="sumbit-login">Login!</button>
    </form>`
}

module.exports = loginTemplate

},{}],3:[function(require,module,exports){
const registerTemplate = () => {
  return `
    <h3>Register</h3>
    <br>
    <form id="register">
      <div class="form-group">
        <label for="login-email">Email address</label>
        <input type="email" class="form-control" id="register-email" aria-describedby="emailHelp" placeholder="Enter email" required>
      </div>
      <div class="form-group">
        <label for="login-password">Password</label>
        <input type="password" class="form-control" id="pword" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-outline-primary" id="sumbit-login">Register!</button>
    </form>`
}

module.exports = registerTemplate

},{}]},{},[1]);
