function ModifyAppTitle(content) {
  if(!content) {
    AppTitle.innerHTML = (window.Configuration.Information.Title || "writea")
    return;
  }
  AppTitle.innerHTML = (window.Configuration.Information.Title || "writea") + " - " + content
}