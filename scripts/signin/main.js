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