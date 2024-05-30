async function RenderConfiguration() {
  // Render values
  AppTitle.innerHTML = window.Configuration.Information.Title || "writea"

  // Apply active theme
  let ActiveTheme = './themes/'+(window.Configuration.Information.Theme || "Default")+'.css'
  fetch(ActiveTheme)
    .then(response => {
      if (!response.ok) {throw new Error(`Network response was not ok: ${response.status}`)}
      return AppTheme.innerHTML = `${response}`
    })
  return;
}