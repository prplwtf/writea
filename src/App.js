document.addEventListener("DOMContentLoaded", (async () => {
  // Register global variables
  var App = document.getElementById("App")
  var AppTitle = document.getElementById("AppTitle")
  var ProgressBarElement = document.getElementById("ProgressBarElement")

  // Import components
  await ImportConfigurations()
  await ImportElements()

  // Navigate
  var interval = setInterval(function() {
    if (typeof window.Configuration == 'undefined') return;
    clearInterval(interval);

    Route(window.location.hash)
  }, 10);
}))