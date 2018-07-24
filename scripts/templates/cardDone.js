const cardDone = (title, description, id, listId, time) => {
  return `
    <div class="card mt-2 card-done" >
      <div class="card-body" task-id="${id}" list-id="${listId}">
        <h5 class="card-title">${title}</h5>
        <hr>
        <p class="card-text">${description}</p>
        <button id="done-remove-button" type="submit" class="btn btn-danger">Remove</button>
      </div>
      <div class="card-footer text-muted">
        Updated ${time} ago
      </div>
    </div>`
}

module.exports = cardDone
