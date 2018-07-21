const loginTemplate = () => {
  return `
    <div class="col-6 p-4 border rounded">
    <h3>Login</h3>
    <hr>
      <form id="login">
        <div class="form-group">
          <label for="login-email">Email address</label>
          <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter email" value="instructor@galvanize.com" required>
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
