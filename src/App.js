document.addEventListener("DOMContentLoaded", (async () => {
  // Register global variables
  App = document.getElementById("App")
  AppTitle = document.getElementById("AppTitle")

  // Import components
  await ImportConfigurations()
  await ImportElements()

  // Navigate home
  var interval = setInterval(function() {
    if (typeof window.Configuration == 'undefined') return;
    clearInterval(interval);

    Route("")
  }, 10);
}))