const createNewListTemplate = () => `<div class="mt-2 p-4 border rounded">
  <form>
    <h4>Create a New Task</h4>
    <hr>
    <div class="form-group">
      <label for="name">Title</label>
      <input type="text" class="form-control" required="required">
    </div>
    <div class="form-group">
      <label for="content">Description</label>
      <textarea type="text" class="form-control" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-warning">Create New Task</button>
  </form>
</div>`

module.exports = createNewListTemplate
