function NavigationBarElement() {
  let ButtonClass = "btn-dark"
  if(window.location.hash != "#blog") {
    ButtonClass = "btn-danger"
  }
  return `
    <div class="row">
      <div class="col-9">
        <h3 class="fw-bolder" onclick="Route('#')">
          ${window.Configuration.Application.Title}
        </h3>
      </div>
      <div class="col-3">
        <button class="btn ${ButtonClass} float-end" onclick="Route('#blog')">
          Blogs
        </button>
      </div>
    </div>
  `
}