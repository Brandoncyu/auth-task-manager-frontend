const cardDone = (title, description, id, time) => `<div class="card mt-2 card-done" data-id="${id}>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <hr>
    <p class="card-text">${description}</p>
    <button id="done-remove-button" type="submit" class="btn btn-danger">Remove</button>
  </div>
  <div class="card-footer text-muted">
    ${time}
  </div>
</div>
<br>`

module.exports = cardDone
