async function RenderConfiguration() {
  // Render values
  if(!window.Configuration) {
    AppTitle.innerHTML = "welcome to gravity"
    return;
  }
  AppTitle.innerHTML = window.Configuration.Application.Title || "gravity"
  return;
}