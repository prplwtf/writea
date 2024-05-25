function NavigationBarElement() {
  let ButtonClass = "btn-dark"
  if(window.location.hash != "#blog") {
    ButtonClass = "btn-danger"
  }

  let LinkElement = ""
  if(window.Configuration.Application.Link) {
    LinkElement = `
      <i
        class="bi bi-link-45deg text-danger-emphasis float-end me-3" style="font-size:25px; cursor:pointer"
        onclick="window.location = '${window.Configuration.Application.Link}'"
      ></i>
    `
  }
  
  return `
    <div class="row mb-3">
      <div class="col-9">
        <h3 class="fw-bolder text-danger-emphasis" onclick="Route('#')" style='cursor: pointer'>
          ${window.Configuration.Application.Title}
        </h3>
      </div>
      <div class="col-3">
        <button type="button" class="btn ${ButtonClass} float-end rounded-5" onclick="Route('#blog')">
          posts
        </button>
        ${LinkElement}
      </div>
    </div>
  `
}