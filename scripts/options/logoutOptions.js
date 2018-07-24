function logoutOptions() {
  localStorage.removeItem('token')
  document.getElementById('gate-buttons').setAttribute('style', 'display:none')
  document.getElementById('key-buttons').setAttribute('style', 'display:block')
  document.getElementById('list-container').setAttribute('style', 'display:none')
  document.getElementById('form-container').innerHTML = ''

  document.getElementById('all-group').innerHTML = ''
  document.getElementById('task-form').innerHTML = ''
  document.getElementById('done-group').innerHTML = ''
  document.getElementById('doing-group').innerHTML = ''

  document.querySelector('title').textContent = 'Sign In'

  window.location.href = window.location.origin
}

module.exports = logoutOptions
