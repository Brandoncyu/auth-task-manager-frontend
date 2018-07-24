const allListsTemplate = (id, title) => {
  return `
  <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" list-id="${id}" data-toggle="list" href="#${id}" role="tab">${title}
    <span id="remove-list-button" new-id="${id}"class="badge badge-pill badge-danger">remove</span>
  </a>`
}

module.exports = allListsTemplate
