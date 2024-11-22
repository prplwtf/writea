async function Route(view) {
  window.location.hash = view
  Unload("Section")
  ProgressBar(25)

  // Allow URLs ending in a slash
  if(view.endsWith('/')) {
    let lastIndex = view.lastIndexOf('/');
    view =
      view.slice(0, lastIndex) +
      '' +
      view.slice(lastIndex + 1);
  }


  // #
  if(view == "" || view == "#") {
    return Import("./src/components/sections/RootSection.js", "Section", function() {
      App.innerHTML = `${RootSection()}`
      ModifyAppTitle("home")
      Effects()
      ProgressBar(100)
    })
  }

  // #blog
  if(view == "#blog") {
    return Import("./src/components/sections/BlogSection.js", "Section", function() {
      App.innerHTML = `${BlogSection()}`
      ModifyAppTitle("posts")
      Effects()
      ProgressBar(100)
    })
  }

  // #read
  if(view == "#read" || view.startsWith("#read/")) {
    return Import("./src/components/sections/ReadSection.js", "Section", async function() {
      ProgressBar(65)
      App.innerHTML = `${await ReadSection()}`
      Effects()
    })
  }

  // #about
  if(view == "#about") {
    return Import("./src/components/sections/AboutSection.js", "Section", function() {
      App.innerHTML = `${AboutSection()}`
      ModifyAppTitle("about")
      Effects()
      ProgressBar(100)
    })
  }

  // #404
  console.warn(`404: ${view} not found.`)
  return Import("./src/components/sections/NotfoundSection.js", "Section", function() {
    App.innerHTML = `${NotfoundSection()}`
    ModifyAppTitle("404")
    Effects()
    ProgressBar(100)
  })
}

window.addEventListener("hashchange", function() {
  Route(window.location.hash)
});

function Effects() {
  const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
  rippleSurface.map(s => {
    return new mdc.ripple.MDCRipple(s)
  })
}