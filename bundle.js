(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const login = document.getElementById('login')

login.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = `<form id="login">
    <label for="login-username">Username</label>
    <br>
    <input type="text" name="login-username" id="login-username" required="required">
    <br>
    <br>
    <label for="pword">Password</label>
    <br>
    <input type="password" name="pword" id="pword" required="required">
    <br>
    <br>
    <input class="btn btn-secondary" type="submit" id="submit-login" value="Login!">
  </form>`
})

const register = document.getElementById('register')

register.addEventListener('click', function() {
  const container = document.getElementById('form-container')
  container.innerHTML = `<form id="register">
    <label for="register-username">Username</label>
    <br>
    <input type="text" name="register-username" id="register-username" required="required">
    <br>
    <br>
    <label for="pword">Password</label>
    <br>
    <input type="password" name="pword" id="pword" required="required">
    <br>
    <br>
    <input class="btn btn-secondary" type="submit" id="submit-register" value="Register!">
  </form>`
})
},{}]},{},[1]);
