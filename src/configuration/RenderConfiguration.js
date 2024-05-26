async function RenderConfiguration() {
  // Render values
  AppTitle.innerHTML = window.Configuration.Application.Title || "gravity"
  return;
}