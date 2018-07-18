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
