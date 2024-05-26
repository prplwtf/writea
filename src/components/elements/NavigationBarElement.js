function NavigationBarElement() {
  let ButtonClass = "btn-dark"
  if(window.location.hash != "#blog") {
    ButtonClass = "btn-danger"
  }
  
  return `
    <div class="row mb-3">
      <div class="col me-auto">
        <h3 class="fw-bolder text-danger-emphasis text-truncate" onclick="Route('#')" style='cursor: pointer;'>
          ${window.Configuration.Application.Title || "gravity"}
        </h3>
      </div>
      <div class="col-auto">
        ${LinkElement()}
        <button type="button" class="btn ${ButtonClass} rounded-5" onclick="Route('#blog')">
          posts
        </button>
      </div>
    </div>
  `
}