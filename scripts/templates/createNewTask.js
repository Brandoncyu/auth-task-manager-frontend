const createNewTaskTemplate = () => {
  return `
    <div class="mt-2 p-4 border rounded">
      <form id="create-task-form">
        <h4>Create a New Task</h4>
        <hr>
        <div class="form-group">
          <label for="task-title">Title</label>
          <input id="task-title" type="text" class="form-control" required="required">
        </div>
        <div class="form-group">
          <label for="task-content">Description</label>
          <textarea id="task-content" type="text" class="form-control" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-warning">Create New Task</button>
      </form>
    </div>`
}

module.exports = createNewTaskTemplate
