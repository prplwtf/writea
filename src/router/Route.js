function Route(view) {
  window.location.hash = view
  Unload("Section")
  ProgressBar(25)


  // #
  if(view == "" || view == "#") {
    return Import("./src/components/sections/RootSection.js", "Section", function() {
      App.innerHTML = `${RootSection()}`
      ProgressBar(100)
    })
  }

  // #blog
  if(view == "#blog") {
    return Import("./src/components/sections/BlogSection.js", "Section", function() {
      App.innerHTML = `${BlogSection()}`
      ProgressBar(100)
    })
  }

  // #about
  if(view == "#about") {
    return Import("./src/components/sections/AboutSection.js", "Section", function() {
      App.innerHTML = `${AboutSection()}`
      ProgressBar(100)
    })
  }

  ProgressBar(100)
  return App.innerHTML = `An unknown error occured, check your browser console for more information.`
}

window.addEventListener("hashchange", function() {
  Route(window.location.hash)
});