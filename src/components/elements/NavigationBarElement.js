function NavigationBarElement() {
  let ButtonClass = "btn-dark"
  if(window.location.hash != "#blog") {
    ButtonClass = "btn-primary"
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
    <div writea="element.navigation" class="row mb-3">
      <div class="col me-auto">
        <a href="#" class="text-decoration-none">
          <h3 class="fw-bolder text-primary-emphasis text-truncate mb-0 mt-2">
            ${window.Configuration.Information.Icon ? '<img src="./images/'+window.Configuration.Information.Icon+'" height="24px" class="mb-1 me-1" style="min-width: 24px"/>' : ''}
            ${window.Configuration.Information.Title || "writea"}
          </h3>
        </a>
      </div>
      <div class="col-auto">
        ${LinkElement()}
        <a href="#blog">
          <button type="button" class="btn ${ButtonClass} rounded-5">
            posts
            <span class="ripple-surface"></span>
          </button>
        </a>
      </div>
    </div>
  `
}