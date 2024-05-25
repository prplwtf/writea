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
        <button type="button" class="btn ${ButtonClass} float-end rounded-5" onclick="Route('#blog')">
          Blogs
          <span class="ripple-surface"></span>
        </button>
      </div>
    </div>
  `
}