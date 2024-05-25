function Route(view) {
  window.location.hash = view
  Unload("Section")

  if(view == "" || view == "#") {
    return Import("./src/components/sections/RootSection.js", "Section", function() {
      App.innerHTML = `${RootSection()}`
    })
  }

  if(view == "#blog") {
    return Import("./src/components/sections/BlogSection.js", "Section", function() {
      App.innerHTML = `${BlogSection()}`
    })
  }

  return App.innerHTML = `An unknown error occured, check your browser console for more information.`
}

window.addEventListener("hashchange", function() {
  Route(window.location.hash)
});