const allListsTemplate = (id, title) => {
  return `
  <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-id="${id}" data-toggle="list" href="#${id}" role="tab">${title}
    <span id="remove-list-button" class="badge badge-danger badge-pill">remove</span>
  </a>`
}

module.exports = allListsTemplate
