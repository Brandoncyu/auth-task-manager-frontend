const cardDoing = (title, description, id, time) => `<div class="card mt-2 card-doing" data-id="${id}">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <hr>
    <p class="card-text">${description}</p>
    <button id="doing-complete-button" type="submit" class="btn btn-success">Completed</button>
  </div>
  <div class="card-footer text-muted">
    ${time}
  </div>
</div>
<br>`

module.exports = cardDoing
