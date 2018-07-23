function cancelListOptions() {
  document.getElementById('form-container').innerHTML = ''
  document.getElementById('list-container').setAttribute('style', 'display:block')
}

module.exports = cancelListOptions
