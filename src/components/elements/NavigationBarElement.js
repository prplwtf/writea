function NavigationBarElement() {
  let ButtonClass = "btn-dark"
  if(window.location.hash != "#blog") {
    ButtonClass = "btn-danger"
  }

  let ConfigurationReminder = ""
  if(ExampleConfiguration) {
    ConfigurationReminder = MissingConfigurationElement("Configuration.example.yml", "Configuration.yml")
  }
  if(ExampleBlogs && (
    window.location.hash == "#blog" ||
    window.location.hash == "#read" ||
    window.location.hash.startsWith("#read/")
  )) {
    ConfigurationReminder = MissingConfigurationElement("Posts.example.yml", "Posts.yml")
  }
  
  return `
    ${ConfigurationReminder}
    <div class="row mb-3">
      <div class="col me-auto">
        <h3 class="fw-bolder text-danger-emphasis text-truncate mb-0 mt-2" onclick="Route('#')" style='cursor: pointer;'>
          ${window.Configuration.Information.Title || "writea"}
        </h3>
      </div>
      <div class="col-auto">
        ${LinkElement()}
        <button type="button" class="btn ${ButtonClass} rounded-5" onclick="Route('#blog')">
          posts
          <span class="ripple-surface"></span>
        </button>
      </div>
    </div>
  `
}