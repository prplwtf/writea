function NavigationBarElement() {
  let ButtonClass = "btn-dark"
  if(window.location.hash != "#blog") {
    ButtonClass = "btn-danger"
  }

  let ConfigurationReminder = ""
  if(ExampleConfiguration) {
    ConfigurationReminder = MissingConfigurationElement("Configuration.example.yml", "Configuration.yml")
  }
  if(ExampleBlogs && window.location.hash == "#blog") {
    ConfigurationReminder = MissingConfigurationElement("Posts.example.yml", "Posts.yml")
  }
  
  return `
    ${ConfigurationReminder}
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