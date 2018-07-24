const taskDoing = (title, description, id, listId, time) => {
  return `
    <div class="card mt-2 card-doing">
      <div class="card-body" task-id="${id}" list-id="${listId}">
        <h5 class="card-title">${title}</h5>
        <hr>
        <p class="card-text">${description}</p>
        <button id="doing-complete-button" type="submit" class="btn btn-success">Completed</button>
      </div>
      <div class="card-footer text-muted">
      Created ${time} ago
      </div>
    </div>`
}
module.exports = taskDoing
