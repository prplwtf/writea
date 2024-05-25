function Route(view) {
  window.location.hash = view
  UnloadScript("Container")

  if(view == "") {
    return LoadScript("./src/views/pages/RootContainer.js", "Container", function() {
      App.innerHTML = `${RootContainer()}`
    })
  }

  return App.innerHTML = `An unknown error occured, check your browser console for more information.`
}

window.addEventListener("hashchange", function() {
  Route(window.location.hash)
});