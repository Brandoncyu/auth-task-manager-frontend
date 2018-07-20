const newListTemplate = () => {
  return `
  <div class="col-6 p-4 border rounded">
    <h3>New List</h3>
    <hr>
    <form id="list-form">
      <div class="form-group">
        <label for="list-title">Title</label>
        <input type="text" class="form-control" id="list-title" placeholder="Enter List Title" required>
      </div>
      <button type="submit" class="btn btn-success" id="sumbit-list">Create New List</button>
    </form>
  </div>`
}

module.exports = newListTemplate
