function loginOptions() {
  document.getElementById('gate-buttons').setAttribute('style', 'display:block')
  document.getElementById('key-buttons').setAttribute('style', 'display:none')

  document.getElementById('form-container').innerHTML = ''
  document.getElementById('list-container').setAttribute('style', 'display:block')
}

module.exports = loginOptions
