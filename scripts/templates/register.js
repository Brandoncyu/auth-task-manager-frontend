const registerTemplate = () => {
  return `
    <h3>Register</h3>
    <hr>
    <form id="register">
      <div class="form-group">
        <label for="login-email">Email address</label>
        <input type="email" class="form-control" id="register-email" aria-describedby="emailHelp" placeholder="Enter Email" required>
      </div>
      <div class="form-group">
        <label for="login-password">Password</label>
        <input type="password" class="form-control" id="pword" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-info" id="sumbit-login">Register</button>
    </form>`
}

module.exports = registerTemplate
