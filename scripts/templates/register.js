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
