function Navigate(view) {
  App.innerHTML = ""

  if(view == "Home") { App.innerHTML = `${RootContainer()}` }
}