function taskButtonOption() {
  let taskButton = document.getElementById('task-button')
  taskButton.addEventListener('click', showList)
}

function showList() {
  document.getElementById('form-container').innerHTML = ''
  document.getElementById('list-container').setAttribute('style', 'display:block')
}

module.exports = taskButtonOption
